require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");
  const newToken = words[1];
  const decoded = jwt.verify(newToken, secret);
  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else {
    res.status(404).json({
      msg: "You are not authenticated",
    });
  }
}

module.exports = userMiddleware;
