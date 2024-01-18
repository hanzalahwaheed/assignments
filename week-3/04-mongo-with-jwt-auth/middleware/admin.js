const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const authToken = req.headers.authorization;
  const decoded = jwt.verify(authToken, "password");
  if (decoded.username) next();
  else res.status(403).json("You are not authenticated");
}

module.exports = adminMiddleware;
