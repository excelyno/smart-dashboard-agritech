import axios from 'axios';

// URL Backend Anda (Pastikan portnya sama dengan .env)
const API_URL = 'http://localhost:5000/api/readings';

// Fungsi untuk membuat angka acak yang masuk akal
// Suhu: 28°C - 35°C
// Kelembaban: 60% - 90%
const getRandomData = () => {
  const temp = (Math.random() * (35 - 28) + 28).toFixed(1); // 1 angka di belakang koma
  const hum = Math.floor(Math.random() * (90 - 60) + 60);   // Angka bulat

  return {
    deviceId: "SENSOR-KEBUN-01", // ID Alat (bisa diganti-ganti)
    temperature: parseFloat(temp),
    humidity: hum
  };
};

// Fungsi pengirim data
const postData = async () => {
  try {
    const fakeData = getRandomData();
    
    // Kirim POST request ke backend
    const response = await axios.post(API_URL, fakeData);
    
    console.log(`[SUKSES] Terkirim: Suhu ${fakeData.temperature}°C | Lembab ${fakeData.humidity}%`);
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      console.log('❌ Gagal: Server Backend belum nyala!');
    } else {
      console.log(`❌ Error: ${error.message}`);
    }
  }
};

// --- EKSEKUSI UTAMA ---
console.log("🌱 Memulai Simulasi Smart Farming...");
console.log("📡 Mengirim data setiap 5 detik...");

// Kirim data pertama kali langsung
postData();

// Ulangi fungsi postData setiap 5000 milidetik (5 detik)
setInterval(postData, 5000);