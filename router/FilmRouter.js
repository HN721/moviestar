const express = require("express");
const isAuthenticated = require("../middleware/auth");
const upload = require("../middleware/multer");

const filmController = require("../controller/FilmCtrl");
const router = express.Router();

router.get("/get-all", filmController.getAll);
router.post(
  "/create",
  isAuthenticated,
  upload.single("gambar"), // Middleware untuk upload file
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
