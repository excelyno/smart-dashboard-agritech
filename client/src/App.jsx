import { useState, useEffect } from 'react';
import axios from 'axios';
import { Thermometer, Droplets, Activity } from 'lucide-react'; // Icon
import InfoCard from './components/InfoCard';
import HistoryChart from './components/HistoryChart';
import './App.css'; // Import CSS yang tadi dibuat

function App() {
  const [latestData, setLatestData] = useState(null);
  const [historyData, setHistoryData] = useState([]);

  // Fungsi ambil data dari backend
  const fetchData = async () => {
    try {
      // 1. Ambil data terakhir (Kartu)
      const latestRes = await axios.get('http://localhost:5000/api/readings/latest');
      setLatestData(latestRes.data);

      // 2. Ambil history (Grafik)
      const historyRes = await axios.get('http://localhost:5000/api/readings/history');
      setHistoryData(historyRes.data);
      
    } catch (error) {
      console.error("Gagal ambil data:", error);
    }
  };

  // Jalankan saat pertama kali load & set interval
  useEffect(() => {
    fetchData(); // Panggil langsung
    const interval = setInterval(fetchData, 5000); // Ulang tiap 5 detik
    return () => clearInterval(interval); // Bersihkan saat close
  }, []);

  return (
    <div className="container">
      <h1>🌱 Smart Farming Dashboard</h1>

      {/* Bagian Atas: Kartu Status */}
      <div className="stats-grid">
        <InfoCard 
          label="Suhu Udara"
          value={latestData ? latestData.temperature : '--'}
          unit="°C"
          icon={Thermometer}
          color="#ff6b6b"
        />
        <InfoCard 
          label="Kelembaban"
          value={latestData ? latestData.humidity : '--'}
          unit="%"
          icon={Droplets}
          color="#4ecdc4"
        />
        <InfoCard 
          label="Status Alat"
          value="ON"
          unit=""
          icon={Activity}
          color="#2ecc71"
        />
      </div>

      {/* Bagian Bawah: Grafik */}
      <div className="chart-container">
        <HistoryChart data={historyData} />
      </div>
    </div>
  );
}

export default App;