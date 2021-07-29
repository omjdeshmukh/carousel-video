require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

const videosRouter = require("./routes/videos");
app.use("/videos", videosRouter);

app.listen(5000, () => {
  console.log("Server is Started on localhost:5000 !!!!");
});
