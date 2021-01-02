const express = require("express");
const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
require("dotenv").config();
console.log(process.env.MONGO_URI);

const app = express();

//routes
const auth = require("./routes/auth");

//connect to mongo
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// const posts = [
//   {
//     name: "dude",
//     age: 24,
//   },
//   {
//     name: "dude2",
//     age: 23,
//   },
// ];

app.get("/", (req, res) => {
  res.send("git gud");
  console.log("here");
});

app.use("/auth", auth);

// app.get("/posts", (req, res) => {
//   res.json(posts);
// });

app.listen(5000, () => {
  console.log("server live");
});
