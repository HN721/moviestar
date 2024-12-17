const express = require("express");
const mongoose = require("mongoose");
const FilmRouter = require("../router/FilmRouter");

require("dotenv").config();

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
app.use("/api/film", FilmRouter);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
