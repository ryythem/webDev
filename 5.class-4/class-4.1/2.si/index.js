const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/si", (req, res) => {
  const p = parseInt(req.query.p);
  const r = parseInt(req.query.r);
  const t = parseInt(req.query.t);

  const si = (p * r * t) / 100;

  res.send(si.toString());
});

app.listen(3000);
