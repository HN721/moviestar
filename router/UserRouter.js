const express = require("express");
const isAuthenticated = require("../middleware/auth");

const userController = require("../controller/UserCtrl");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/get-all", isAuthenticated, userController.getAll);
router.get("/find/:id", isAuthenticated, userController.findOne);
router.delete("/delete/:id", isAuthenticated, userController.delete);
router.put("/update/:id", isAuthenticated, userController.update);

module.exports = router;
