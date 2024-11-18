const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Authorization token required" });
    }

    // Verify token
    const decoded = jwt.verify(token, "hosea123");

    // Attach user ID to request and proceed
    req.user = decoded.id;
    next();
  } catch (error) {
    // Handle token expiration or invalid token
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = isAuthenticated;

/******  53db2cda-988f-4f08-af6b-e516a3e47380  *******/
