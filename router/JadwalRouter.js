const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middleware/auth");

const jadwalController = require("../controller/jadwalTayangCtrl");

router.get("/get-all", jadwalController.getAll);
router.post("/create", isAuthenticated, jadwalController.create);
router.put("/update/:id", isAuthenticated, jadwalController.update);
router.delete("/delete/:id", isAuthenticated, jadwalController.delete);
router.get("/get-one/:id", jadwalController.findOne);

module.exports = router;
