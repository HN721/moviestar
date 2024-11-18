const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./router/UserRouter");
const FilmRouter = require("./router/FilmRouter");
const BioskopRouter = require("./router/BioskopRouter");
const JadwalRouter = require("./router/JadwalRouter");

const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://localhost:5173", // Alamat frontend Anda
  methods: ["GET", "POST", "PUT", "DELETE"], // HTTP methods yang diizinkan
  allowedHeaders: ["Content-Type", "Authorization"], // Header yang diizinkan
  credentials: true, // J
};
app.use(express.json());
//qSZnSG6lHP6x9Rt5

app.use(cors(corsOptions));

mongoose
  .connect(
    "mongodb+srv://hosea1422:qSZnSG6lHP6x9Rt5@mtixxx.8uavj.mongodb.net/?retryWrites=true&w=majority&appName=mtixxx"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

/******  4ff8e07c-1617-4970-ac79-71d12fe8786f  *******/
app.use("/api", UserRouter);
app.use("/api/film", FilmRouter);
app.use("/api/bioskop", BioskopRouter);
app.use("/api/jadwal", JadwalRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
