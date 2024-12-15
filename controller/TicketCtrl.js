const Ticket = require("../model/Ticket");
const TicketController = {
  create: async (req, res) => {
    try {
      const { seat, jadwal } = req.body;

      if (!seat || !jadwal) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const ticket = await Ticket.create({ seat, jadwal, user: req.user });
      res.status(201).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const tickets = await Ticket.find().populate("seat").populate("jadwal");
      res.status(200).json(tickets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const ticket = await Ticket.findById(id)
        .populate("seat")
        .populate("jadwal");
      res.status(200).json(ticket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = TicketController;
