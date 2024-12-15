const Order = require("../model/orders");
const orderController = {
  create: async (req, res) => {
    try {
      const { jadwal, total } = req.body;
      if (!jadwal || !total) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const order = await Order.create({
        jadwal,
        user: req.user,
        total,
      });
      res.status(201).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const orders = await Order.find().populate("jadwal").populate("user");
      res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const order = await Order.findOne({ user: id })
        .populate("jadwal")
        .populate("user");
      res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
module.exports = orderController;
