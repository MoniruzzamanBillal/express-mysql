const express = require("express");
const router = express.Router();
const {
  getStudents,
  createStudent,
  login,
} = require("../controller/StudentController");

router.get("/students", getStudents);
router.post("/addStudent", createStudent);
router.post("/login", login);

module.exports = router;
