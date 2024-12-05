const mongoose = require("mongoose");

const jadwalTayangSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Film",
  },
  bioskop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bioskop",
  },
  tanggal: {
    type: String,
  },
  waktu: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
});
const Jadwal = mongoose.model("Jadwal", jadwalTayangSchema);

module.exports = Jadwal;
