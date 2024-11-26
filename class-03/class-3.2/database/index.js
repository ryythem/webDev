require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

const app = express();
app.use(express.json());

mongoose.connect(mongoURI);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: username,
    email: email,
    password: password,
  });

  user.save();
  res.json({
    msg: "user created",
  });
});

app.listen(3000);
