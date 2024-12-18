const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userController = {
  register: async (req, res) => {
    try {
      const { email, password, hp, name } = req.body;
      if (!email || !password || !hp || !name) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "Email Sudah Ada" });
      }
      const hpExists = await User.findOne({ hp });
      if (hpExists) {
        return res.status(400).json({ message: "Nomor HP Sudah Ada" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPass = await bcrypt.hash(password, salt);
      const user = await User.create({ email, password: hashPass, hp, name });
      return res.status(201).json(user);
    } catch (error) {
      console.error("Error in register:", error.message); // Log error
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Email Tidak Ada" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Password Salah" });
      }
      const token = jwt.sign({ id: user._id }, "hosea123", { expiresIn: "1h" });
      return res.status(200).json({
        message: "Login successful",
        role: user.role,
        nama: user.name,
        token,
        id: user._id,
        email: user.email,
      });
    } catch (error) {
      console.error("Error in login:", error.message); // Log error
      res.status(500).json({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await User.find();
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error in getAll:", error.message); // Log error
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password, hp, name, role } = req.body;

      let updatedFields = { email, hp, name, role };

      if (password) {
        // Only hash the password if it's provided
        const salt = await bcrypt.genSalt(10);
        updatedFields.password = await bcrypt.hash(password, salt);
      }

      const user = await User.findOneAndUpdate(
        { _id: id },
        updatedFields,
        { new: true } // Return the updated document
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error("Error in update:", error.message); // Log error for debugging
      res.status(500).json({ message: error.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error in findOne:", error.message); // Log error
      res.status(500).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
      return res.status(200).json(user);
    } catch (error) {
      console.error("Error in delete:", error.message); // Log error
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
