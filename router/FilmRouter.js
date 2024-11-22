const express = require("express");
const isAuthenticated = require("../middleware/auth");
const multer = require("multer");

const filmController = require("../controller/FilmCtrl");
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Direktori penyimpanan
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Nama file unik
  },
});

const upload = multer({ storage });

router.get("/get-all", filmController.getAll);
router.post(
  "/create",
  isAuthenticated,
  upload.single("gambar"),
  filmController.create
);
router.put(
  "/update/:id",
  isAuthenticated,
  upload.single("gambar"),
  filmController.update
);
router.delete("/delete/:id", isAuthenticated, filmController.delete);

module.exports = router;
