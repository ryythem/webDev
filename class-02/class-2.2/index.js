const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/learn", (req, res) => {
  console.log(req.headers);
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
