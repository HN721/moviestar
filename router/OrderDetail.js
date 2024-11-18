const express = require("express");
const orderDetailController = require("../controller/OrderDetail");
const isAuthenticated = require("../middleware/auth");

const router = express.Router();

router.get("/get-all", isAuthenticated, orderDetailController.getAll);
router.post("/create", isAuthenticated, orderDetailController.create);

module.exports = router;
