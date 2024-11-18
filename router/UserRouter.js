const express = require("express");
const isAuthenticated = require("../middleware/auth");

const userController = require("../controller/UserCtrl");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/get-all", isAuthenticated, userController.getAll);

module.exports = router;
