const OrderDetail = require("../model/orderDetail");

const orderDetailController = {
  getAll: async (req, res) => {
    try {
      const orderDetails = await OrderDetail.find();
      res.status(200).json(orderDetails);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const { order, kursi } = req.body;
      if (!order || !kursi) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const orderDetail = await OrderDetail.create({
        order,
        kursi,
        user: req.user,
      });
      res.status(201).json(orderDetail);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = orderDetailController;
