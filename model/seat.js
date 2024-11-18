const mongoose = require("mongoose");
const seatSchema = new mongoose.Schema(
  {
    jadwal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jadwal",
      required: true,
    },
    kursi: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "booked"],
      default: "available",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Seat = mongoose.model("Seat", seatSchema);

module.exports = Seat;
