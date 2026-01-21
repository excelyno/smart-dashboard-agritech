import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js';
import readingRoutes from './routes/readingRoutes.js';
import logger from './middleware/logger.js';
import deviceRoutes from './routes/deviceRoutes.js'

//koneksi buat database
connectDB();

const app = express()

//middleware global
app.use(cors())
app.use(express.json())
app.use(logger)

//routing
//semua request berawalan routes
app.use('/api/readings', readingRoutes)
app.use('/api/devices', deviceRoutes)

//root endpoint (checking server menyala di root)
app.get('/',(req, res) => {
    res.send('smart farm API is running...')
})

//jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server berjalan di port ${PORT}`))
