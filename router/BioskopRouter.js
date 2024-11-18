const express = require("express");
const BioskopCtrl = require("../controller/BioskopCtrl");
const isAuthenticated = require("../middleware/auth");

const router = express.Router();

router.get("/get-all", BioskopCtrl.getAll);
router.post("/create", isAuthenticated, BioskopCtrl.create);
router.put("/update/:id", isAuthenticated, BioskopCtrl.update);

module.exports = router;
