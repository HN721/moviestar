const express = require("express");
const isAuthenticated = require("../middleware/auth");

const filmController = require("../controller/FilmCtrl");
const router = express.Router();

router.get("/get-all", filmController.getAll);
router.post("/create", isAuthenticated, filmController.create);
router.put("/update/:id", isAuthenticated, filmController.update);
router.delete("/delete/:id", isAuthenticated, filmController.delete);

module.exports = router;
