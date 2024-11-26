const express = require("express");
const zod = require("zod");

const app = express();
const schema = zod.array(zod.number());

app.use(express.json());

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "haha" || password != "hahahaha") {
    res.status(403).json({
      msg: "Incorrect inputs",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      msg: "wrong inputs",
    });
  } else {
    next();
  }
}

app.get("/health-checkup", userMiddleware, kidneyMiddleware, (req, res) => {
  res.send("Your heart is healthy");
});

app.post("/health-checker", (req, res) => {
  const kidneys = req.body.kidneys;
  const respose = schema.safeParse(kidneys);

  if (!respose.success) {
    res.status(403).json({
      msg: "Invalid input",
    });
  } else {
    res.json({
      msg: "Cool!",
    });
  }
});

app.listen(3000);
