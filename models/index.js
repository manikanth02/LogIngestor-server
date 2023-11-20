import mongoose from "mongoose";

const schema = new mongoose.Schema({
        level:{
            type:String
        },
        message:{
            type:String
        },
        resourceId:{
            type:String
        },
        timestamp:{
            type:Date
        },traceId:{
            type:String
        },
        
            spanId:{
                type:String
            },
        commit:{
            type:String
        },
        metadata:{
            parentResourceId:{
                type:String
            }
        }
        // 
})

// schema.index({
//     level : 'text',
//     message : 'text',
//     resourceId : 'text',
//     traceId : 'text',
//     spanId : 'text',
//     commit : 'text',
//    "metadata.parentResourceId" : 'text',
//     timestamp : 'text'
// })

 const logIngestion = mongoose.model("logIngestion",schema);

 export default logIngestion;