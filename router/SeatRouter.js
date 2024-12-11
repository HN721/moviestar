const express = require("express");
const seatController = require("../controller/SeatCtrl");
const isAuthenticated = require("../middleware/auth");

const router = express.Router();

router.post("/create", isAuthenticated, seatController.create);
router.get("/get-all", isAuthenticated, seatController.getAll);
router.get("/get-one/:id", isAuthenticated, seatController.getOne);

module.exports = router;
