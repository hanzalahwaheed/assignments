const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.find({ username: username });
    if (existingAdmin.length > 0) {
      return res.status(409).json("Admin already exists");
    }

    await Admin.create({
      username: username,
      password: password,
    });

    res.json("Admin created successfully");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const admin = await Admin.find({ username: username, password: password });

    if (!admin) {
      res.status(404).json("Admin not found");
    } else {
      const token = jwt.sign({ username: username }, "password");
      res.json({ token });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, imageLink, price } = req.body;
    const courseId = Math.floor(Math.random() * 100000);
    await Course.create({
      courseId: courseId,
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    });
    res.json("Course created successfully");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find();
    if (courses.length > 0) res.json(courses);
    else res.status(404).json("No courses available");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
