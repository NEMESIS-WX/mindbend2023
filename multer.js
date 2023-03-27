const multer = require("multer");
const path = require("path");

const detail = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets/payment_screenshots");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    ); //fieldname=name in the form
  },
});

module.exports = multer({
  storage: detail,
  limits: { fileSize: 50 * 1024 * 1024, fieldSize: 50 * 1024 * 1024 },
});
