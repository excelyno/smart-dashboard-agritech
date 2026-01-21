import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrasi modul Chart.js (Wajib dilakukan)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryChart = ({ data }) => {
  // Mengolah data agar bisa dibaca Chart.js
  // Kita ambil timestamp (jam:menit) untuk sumbu X
  const labels = data.map((reading) => 
    new Date(reading.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Suhu (°C)',
        data: data.map((reading) => reading.temperature),
        borderColor: '#ff6b6b', // Merah
        backgroundColor: 'rgba(255, 107, 107, 0.5)',
        tension: 0.4, // Membuat garis melengkung halus
      },
      {
        label: 'Kelembaban (%)',
        data: data.map((reading) => reading.humidity),
        borderColor: '#4ecdc4', // Biru kehijauan
        backgroundColor: 'rgba(78, 205, 196, 0.5)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Grafik Monitoring Real-time' },
    },
  };

  return <Line options={options} data={chartData} />;
};

export default HistoryChart;