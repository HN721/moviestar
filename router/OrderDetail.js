const express = require("express");
const orderDetailController = require("../controller/OrderDetail");
const router = express.Router();

router.get("/get-all", orderDetailController.getAll);
router.post("/create", orderDetailController.create);

module.exports = router;
