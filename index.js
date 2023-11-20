import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import dataBase from "./config/dataBase.js";
import routes from "./routes/index.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();


dataBase();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}))
app.use(express.json());
app.use("/api/v1",routes);
app.get("/",(req,res) => {
    return res.json({
        success:true,
        message:"Your server is up and running......"
    })
});

app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
});
