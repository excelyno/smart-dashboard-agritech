import express from "express";

import { createReading, getLatestReading, getReadingHistory } from "../controllers/readingController.js";

const router = express.Router()

//routes
router.post('/', createReading)             //post /api/readings
router.get('/latest', getLatestReading)     //get /api/readings/latest
router.get('/history', getReadingHistory)   //get /api/readings/history

export default router