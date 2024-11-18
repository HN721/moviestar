const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/auth");

const jadwalController = require("../controller/jadwalTayangCtrl");

router.get("/get-all", jadwalController.getAll);
router.post("/create", isAuthenticated, jadwalController.create);

module.exports = router;
