const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./router/UserRouter");
const app = express();

app.use(express.json());
//13lEA1FvKQ4kGkos
const cors = require("cors");
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://hosea1422:13lEA1FvKQ4kGkos@moviehn.1qgbp.mongodb.net/?retryWrites=true&w=majority&appName=MovieHn"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));
/******  4ff8e07c-1617-4970-ac79-71d12fe8786f  *******/
app.use("/", UserRouter);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
