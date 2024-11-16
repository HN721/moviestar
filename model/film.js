const mongoose = require("mongoose");
const filmSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  durasi: {
    type: Number,
    required: true,
  },
  gambar: {
    type: String,
    required: true,
  },
});
const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
