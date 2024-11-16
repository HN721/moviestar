const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userController = {
  register: async (req, res) => {
    try {
      const { email, password, hp, name } = req.body;
      if (!email || !password || !hp || !name) {
        throw new Error("All fields are required");
      }
      const userExits = await User.findOne({ email });
      if (userExits) {
        throw new Error("Email Sudah Ada");
      }
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);
      const user = await User.create({ email, password: hashPass, hp, name });
      res.status(201).json(user);
    } catch (error) {}
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("All fields are required");
      }
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Email Tidak Ada");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Password Salah");
      }
      const token = jwt.sign({ id: user._id }, "hosea123", { expiresIn: "1h" });
      res
        .status(200)
        .json({
          message: "Login successful",
          token,
          id: user._id,
          email: user.email,
          username: user.username,
        });
    } catch (error) {}
  },
};
module.exports = userController;
