import Reading from "../models/Reading.js";

// @desc    Simpan data sensor baru
// @route   POST /api/readings

export const createReading = async (req, res) => {
    try {
        const {deviceId, temperature, humidity} = req.body;
        const newReading = new Reading({deviceId, temperature, humidity})
        await newReading.save()
        res.status(201).json({message: 'Data saved!', data: newReading})
    }catch (error) {
        res.status(500).json({error: error.message})
    }
}

// @desc    Ambil 1 data terbaru
// @route   GET /api/readings/latest
export const getLatestReading = async (req, res) => {
    try {
        const data = await Reading.findOne().sort({timestamp: -1})
        res.json(data);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// @desc    Ambil history data (20 terakhir)
// @route   GET /api/readings/history
export const getReadingHistory = async (req, res) => {
  try {
    // CARA YANG BENAR: Chaining method Mongoose
    // .find() -> .sort() -> .limit() -> baru await
    const data = await Reading.find()
      .sort({ timestamp: -1 }) // Sort DB: Terbaru paling atas
      .limit(20);              // Ambil cuma 20

    // Saat ini 'data' sudah berupa Array berisi 20 item terbaru.
    // Kita balik (reverse) urutannya agar di grafik Frontend
    // muncul dari kiri (lama) ke kanan (baru).
    // .reverse() adalah fungsi Array JS standar, tidak perlu argumen.
    res.json(data.reverse()); 
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};