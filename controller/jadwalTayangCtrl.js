const Jadwal = require("../model/jadwalTayang");

const jadwalController = {
  create: async (req, res) => {
    try {
      const { movie, bioskop, tanggal, waktu } = req.body;
      if (!movie || !bioskop || !tanggal || !waktu) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const jadwal = await Jadwal.create({ movie, bioskop, tanggal, waktu });
      res.status(201).json(jadwal);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const jadwals = await Jadwal.find().populate("movie").populate("bioskop");
      res.status(200).json(jadwals);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
module.exports = jadwalController;
