require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send({ Message: "This is a message" });
});

app.listen(4000, () => {
  console.log("post is ready");
});
