require("dotenv").config();

const express = require("express");
const rootRouter = require("./routes/index");
const cors = require("cors");
const jwtSecret = process.env.JWT_SECRET;

console.log(jwtSecret);

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
