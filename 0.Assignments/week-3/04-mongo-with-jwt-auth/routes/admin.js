require("dotenv").config();
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");

const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username,
    password,
  });
  res.json({
    msg: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.find({
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
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Wrong credentials",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    msg: "Course created successfully",
    id: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

module.exports = router;
