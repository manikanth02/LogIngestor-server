import logIngestion from "../models/index.js";
import moment from "moment";

 export const saveLog = async (req, res) => {
    try{
      const {level,message,resourceId,timestamp,traceId,spanId,commit,metadata} = req.body;
      const log = await logIngestion.create({
        level,
        message,
        resourceId,
        timestamp,
        traceId,
        spanId,
        commit,
        metadata
      })
      return res.status(200).json({
        success:true,
        message:"Log Saved Successfully",
      })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
export const getLogs = async (req,res) => {
    try{
        let query ={};
        if(req.query.search)
        {   query = {$or:[]}
        }
       

        const keys = Object.keys(req.query)
        keys.map((key) => {
            switch(key) {
                case "search":
                    console.log("here");
                    query.$or = [
                        { level: new RegExp(req.query.search, 'i') },
                        {message:new RegExp(req.query.search, 'i')},
                        {resourceId:new RegExp(req.query.search,"i")},
                        {traceId:new RegExp(req.query.search,"i")},
                        {spanId:new RegExp(req.query.search,"i")},
                        {commit:new RegExp(req.query.search,"i")},
                        {'metadata.parentResourceId': new RegExp(req.query.search, 'i')},
                ]
                break;
                case "startDate":
                    if(!req.query.endDate){
                        throw new Error(
                            "End Date is required"
                        )
                    }
                    else{
                    const startDate = moment(req.query.startDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
                    const endDate = moment(req.query.endDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
                    if (startDate.isValid() && endDate.isValid()) {
                    query.timestamp = { $gte: startDate.toDate(), $lte: endDate.toDate() };
                    } else {
                    throw new error(
                        "Invalid Date format/Range"
                    )
                    }


                    }
                    break;
                
                    default:
                   
                        console.log(req.query[key],"hereeeeeeeeee",
                        'metadata.parentResourceId');
                        if(req.query[key] && key !== "endDate"  ){
                            
                            if(key==="parentResourceId"){
                                console.log("if  ")
                                query['metadata.parentResourceId'] = req.query[key]
                            }else{
                                console.log("else")
                        query[key] = req.query[key];
                            }
                        }
                        break;
                


            }
        })


        console.log(query,"query");
        const logs = await logIngestion.find(query);
        return res.status(200).json({
            success:true,
            logs
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

// export default saveLog;