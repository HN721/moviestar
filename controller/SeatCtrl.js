const Seat = require("../model/seat");

const seatConotroller = {
  create: async (req, res) => {
    try {
      const { jadwal, kursi, status } = req.body;
      if (!jadwal || !kursi || !status) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const seat = await Seat.create({ jadwal, kursi, status });
      res.status(201).json(seat);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const seats = await Seat.find().populate("jadwal").populate("kursi");
      res.status(200).json(seats);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = seatConotroller;
