const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const UserRouter = require("./router/UserRouter");
const FilmRouter = require("./router/FilmRouter");
const BioskopRouter = require("./router/BioskopRouter");
const JadwalRouter = require("./router/JadwalRouter");
const SeatRouter = require("./router/SeatRouter");
const OrderRouter = require("./router/OrdeRouter");
const OrderDetailRouter = require("./router/OrderDetail");
const Ticket = require("./router/TicketRouter");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "https://movietar-tau.vercel.app", // Alamat frontend Anda
  methods: ["GET", "POST", "PUT", "DELETE"], // HTTP methods yang diizinkan
  allowedHeaders: ["Content-Type", "Authorization"], // Header yang diizinkan
  credentials: true, // J
};
app.use(express.json());
//qSZnSG6lHP6x9Rt5

app.use(cors(corsOptions));

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
//id film 6739fff9cc30e78ea94a0e06
//id bioskop 673ad1b28e214e93a6607b0b
//id user 673b47e8633289404cf72dd7
/******  4ff8e07c-1617-4970-ac79-71d12fe8786f  *******/
app.use("/api/user", UserRouter);
app.use("/api/ticket", Ticket);
app.use("/api/film", FilmRouter);
app.use("/api/bioskop", BioskopRouter);
app.use("/api/jadwal", JadwalRouter);
app.use("/api/seat", SeatRouter);
app.use("/api/order", OrderRouter);
app.use("/api/detail", OrderDetailRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
