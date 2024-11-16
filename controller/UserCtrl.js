const User = require("../model/user");
const bcrypt = require("bcryptjs");
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
};
module.exports = userController;
