const express = require("express");
var user = [
  {
    name: "John",
    kidneys: [
      {
        healthify: false,
      },
    ],
  },
];

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  let johnKidneys = user[0].kidneys;
  let numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (johnKidneys[i].healthify) {
      numberOfHealthyKidneys++;
    }
  }
  let numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthify = true;
  }
  res.json({});
});

app.delete("/", function (req, res) {
  const newKidneys = [];
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (user[0].kidneys.healthify) {
      newKidneys.push({
        healthify: true,
      });
    }
  }
  user[0].kidneys = newKidneys;
  res.json({
    msg: "Done",
  });
});

app.listen(3000);
