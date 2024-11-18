const mongoose = require("mongoose");
const bioskopSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  lokasi: {
    type: String,
    required: true,
  },
});
const Bioskop = mongoose.model("Bioskop", bioskopSchema);

module.exports = Bioskop;
