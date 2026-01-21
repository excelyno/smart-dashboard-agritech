import { useState, useEffect } from 'react';
import axios from 'axios';
import { Thermometer, Droplets, Activity } from 'lucide-react';
import InfoCard from './components/InfoCard';
import HistoryChart from './components/HistoryChart';
import PumpControl from './components/PumpControl';
import './App.css';

function App() {
  const [latestData, setLatestData] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [pumpStatus, setPumpStatus] = useState('OFF');


  // Fungsi ambil data dari backend
  const fetchData = async () => {
    try {
      // 1. Ambil data terakhir (Kartu)
      const latestRes = await axios.get('http://localhost:5000/api/readings/latest');
      setLatestData(latestRes.data);

      // 2. Ambil history (Grafik)
      const historyRes = await axios.get('http://localhost:5000/api/readings/history');
      setHistoryData(historyRes.data);
      
      //3. menambahkan status dari pompa air (devices)
      const pumpRes = await axios.get('http://localhost:5000/api/devices/pump')
      setPumpStatus(pumpRes.data.status)

    } catch (error) {
      console.error("Gagal ambil data:", error);
    }
  };

// 2. Fungsi saat tombol ditekan
  const handleTogglePump = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/devices/pump/toggle`);
      // Update state sesuai respon backend
      setPumpStatus(res.data.data.status);
    } catch (error) {
      alert("Gagal mengubah status pompa!");
    }
  };



  // Jalankan saat pertama kali load & set interval
  useEffect(() => {
    fetchData(); // Panggil langsung
    const interval = setInterval(fetchData, 5000); // Ulang tiap 5 detik
    return () => clearInterval(interval); // Bersihkan saat close
  }, []);

// Logika warna (seperti sebelumnya)
  const tempColor = latestData && latestData.temperature > 32 ? '#d63031' : '#0984e3';
  const tempStatus = latestData && latestData.temperature > 32 ? 'PANAS ⚠️' : 'Normal ✅';


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
        <PumpControl 
          status={pumpStatus} 
          onToggle={handleTogglePump} 
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