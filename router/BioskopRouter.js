const express = require("express");
const BioskopCtrl = require("../controller/BioskopCtrl");

const router = express.Router();

router.get("/get-all", BioskopCtrl.getAll);
router.post("/create", BioskopCtrl.create);
router.put("/update/:id", BioskopCtrl.update);

module.exports = router;
