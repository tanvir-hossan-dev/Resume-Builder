require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");

app.use(cors());
app.use(express.json());
let port = 4000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`${port} port is start`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(router);
