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
    type: Date,
    required: true,
  },
  waktu: {
    type: String,
    required: true,
  },
});
const Jadwal = mongoose.model("Jadwal", jadwalTayangSchema);

module.exports = Jadwal;
