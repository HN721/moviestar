const express = require("express");
const orderController = require("../controller/OrderCtrl");
const isAuthenticated = require("../middleware/auth");

const router = express.Router();

router.get("/get-all", isAuthenticated, orderController.getAll);
router.post("/create", isAuthenticated, orderController.create);

module.exports = router;
