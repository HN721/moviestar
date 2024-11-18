const express = require("express");
const router = express.Router();

const jadwalController = require("../controller/jadwalTayangCtrl");

router.get("/get-all", jadwalController.getAll);
router.post("/create", jadwalController.create);

module.exports = router;
