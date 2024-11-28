const Jadwal = require("../model/jadwalTayang");

const jadwalController = {
  create: async (req, res) => {
    try {
      const { movie, bioskop, tanggal, waktu, harga } = req.body;
      if (!movie || !bioskop || !tanggal || !waktu || !harga) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const jadwal = await Jadwal.create({
        movie,
        bioskop,
        tanggal,
        waktu,
        harga,
      });
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
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { movie, bioskop, tanggal, waktu, harga } = req.body;
      if ((!movie || !bioskop || !tanggal || !waktu, !harga)) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const jadwal = await Jadwal.findByIdAndUpdate(
        id,
        { movie, bioskop, tanggal, waktu, harga },
        { new: true }
      );
      res.status(200).json(jadwal);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const deletedJadwal = await Jadwal.findByIdAndDelete(id);
    if (!deletedJadwal) {
      return res.status(404).json({ error: "Jadwal not found" });
    }
    res.status(200).json(deletedJadwal);
  },
};
module.exports = jadwalController;
