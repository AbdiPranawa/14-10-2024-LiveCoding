const multer = require("multer");

const multerFiltering = (req, file, cb) => {
  if (file.mimetype == "image/png" || file.mimetype == "image/jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Image format is not valid! Only PNG and JPEG are allowed."), false);
  }
};

const upload = multer({ fileFilter: multerFiltering });

module.exports = upload;
