const Order = require("../model/orders");
const { getAll } = require("./jadwalTayangCtrl");
const orderController = {
  create: async (req, res) => {
    try {
      const { jadwal, user, status, total } = req.body;
      if (!jadwal || !user || !status || !total) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const order = await Order.create({ jadwal, user, status, total });
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
};
module.exports = orderController;
