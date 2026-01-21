const logger = (req, res, next) => {
  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} request ke ${req.originalUrl}`);
  next(); // Lanjut ke proses berikutnya
};

export default logger;