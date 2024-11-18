const express = require("express");
const seatController = require("../controller/SeatCtrl");
const router = express.Router();

router.post("/create", seatController.create);
router.get("/get-all", seatController.getAll);

module.exports = router;
