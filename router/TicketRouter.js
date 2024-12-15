const express = require("express");
const isAuthenticated = require("../middleware/auth");
const ticketController = require("../controller/TicketCtrl");

const router = express.Router();

router.get("/get-all", isAuthenticated, ticketController.getAll);
router.get("/get-one/:id", isAuthenticated, ticketController.findOne);
router.post("/create", isAuthenticated, ticketController.create);

module.exports = router;
