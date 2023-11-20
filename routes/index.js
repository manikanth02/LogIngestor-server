import express from "express";
import  {saveLog,getLogs}  from "../controllers/index.js";
const router = express.Router();

router.post("/createlog",saveLog);
router.get("/getLogs",getLogs);

export default router;