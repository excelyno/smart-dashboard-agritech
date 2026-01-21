# 🌱 Smart Farming IoT Dashboard (MERN Stack)

Sistem monitoring dan kontrol pertanian pintar berbasis web. Proyek ini mensimulasikan pembacaan sensor IoT (Suhu & Kelembaban) secara real-time dan menyediakan fitur kontrol aktuator (Pompa Air) melalui dashboard yang interaktif.

## 🚀 Fitur Utama

* **Real-time Monitoring:** Menampilkan data suhu dan kelembaban terkini.
* **Visual Alert:** Indikator warna berubah (Merah/Hijau) jika suhu panas/aman.
* **Data Visualization:** Grafik riwayat data sensor menggunakan Chart.js.
* **Remote Control (Actuating):** Tombol Saklar untuk menyalakan/mematikan Pompa Air.
* **IoT Simulator:** Script simulasi untuk meniru perilaku alat fisik (ESP32) mengirim data dan menerima perintah.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite), Chart.js, Axios, Lucide React (Icons).
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB.
* **Simulator:** Node.js Script.

---

## 📂 Struktur Folder

```text
smart-farm-app/
├── client/                 # Frontend React App
├── controllers/            # Logika Backend
├── models/                 # Skema Database (Mongoose)
├── routes/                 # API Routes
├── simulator.js            # Script Robot/Simulator IoT
├── server.js               # Entry Point Backend
└── README.md               # Dokumentasi