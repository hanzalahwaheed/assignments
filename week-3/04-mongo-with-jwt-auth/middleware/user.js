const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const authToken = req.headers.authorization;
  const decoded = jwt.verify(authToken, "password");
  if (decoded.username) {
    req.username = decoded.username;
    next();
  } else res.status(403).json("You are not authenticated");
}

module.exports = userMiddleware;
