const express = require("express");
const orderController = require("../controller/OrderCtrl");
const router = express.Router();

router.get("/get-all", orderController.getAll);
router.post("/create", orderController.create);

module.exports = router;
