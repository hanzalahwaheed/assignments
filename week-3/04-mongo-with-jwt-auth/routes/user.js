const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;

    const existingUser = await User.find({ username: username });
    if (existingUser.length > 0) {
      return res.status(409).json("User already exists");
    }

    await User.create({
      username: username,
      password: password,
    });

    res.json("User created successfully");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({ username: username, password: password });

    if (!user) {
      res.status(404).json("User not found");
    } else {
      const token = jwt.sign({ username: username }, "password");
      res.json({ token });
    }
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    if (courses.length > 0) res.json(courses);
    else res.status(404).json("No courses available");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courseId = req.params.courseId;
    const course = await Course.find({ courseId: courseId });

    if (course.length < 0) res.status(404).json("Course not found");
    const username = req.username;
    await User.updateOne(
      { username: username },
      { $push: { purchasedCourses: course } }
    );
    res.json("Course purchased successfully");
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const username = req.username;
    const response = await User.findOne(
      { username: username },
      "purchasedCourses"
    );

    const purchasedCourses = await Course.find({
      _id: { $in: response.purchasedCourses },
    });
    res.json(purchasedCourses);
  } catch (error) {
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
