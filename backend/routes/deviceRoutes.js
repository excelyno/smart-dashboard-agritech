import express from "express";

import { getPumpStatus, togglePump } from "../controllers/deviceController.js";

const router = express.Router()

router.get('/pump', getPumpStatus)      // untuk melihat status
router.post('/pump/toggle', togglePump) //untuk menekan tombol

export default router

