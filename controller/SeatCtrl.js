const Seat = require("../model/seat");
const { getOne } = require("./FilmCtrl");

const seatController = {
  // Membuat kursi baru
  create: async (req, res) => {
    try {
      const { jadwal, kursi, status } = req.body;

      // Validasi input
      if (!jadwal || !kursi || !status) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Cek apakah kursi sudah ada untuk jadwal yang sama
      const existingSeat = await Seat.findOne({ jadwal, kursi });
      if (existingSeat) {
        return res
          .status(400)
          .json({ error: "Seat already exists for this schedule" });
      }

      // Buat kursi baru
      const seat = await Seat.create({ jadwal, kursi, status });
      res.status(201).json(seat);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Mengambil semua kursi
  getAll: async (req, res) => {
    try {
      const seats = await Seat.find().populate("jadwal"); // Hanya populate jadwal
      res.status(200).json(seats);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Mengambil kursi berdasarkan jadwal tertentu
  getOne: async (req, res) => {
    try {
      const { id } = req.params; // id adalah ID jadwal yang diminta
      // Cari kursi berdasarkan id jadwal yang ada di field jadwal
      const seats = await Seat.find({ jadwal: id }).populate("jadwal");

      if (!seats || seats.length === 0) {
        return res
          .status(404)
          .json({ error: "Seats not found for the provided schedule" });
      }
      console.log(req.user);
      res.status(200).json(seats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = seatController;
