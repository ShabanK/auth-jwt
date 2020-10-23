const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("git gud");
  console.log("here");
});

app.listen(5000, () => {
  console.log("server live");
});
