const express = require("express");

const filmController = require("../controller/FilmCtrl");
const router = express.Router();

router.get("/get-all", filmController.getAll);
router.post("/create", filmController.create);
router.put("/update/:id", filmController.update);
router.delete("/delete/:id", filmController.delete);

module.exports = router;
