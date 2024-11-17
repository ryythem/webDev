require("dotenv").config();
const { Router, json } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const secret = process.env.JWT_SECRET;
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username,
    password,
  });
  res.json({ msg: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      secret
    );
    res.json({ token });
  } else {
    res.json({
      msg: "Wrong credentials",
    });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;
  const courseId = req.params.courseId;

  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({ msg: "Purchase complete" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
