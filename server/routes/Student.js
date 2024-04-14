const express = require("express");
const router = express.Router();
const { getStudents } = require("../controller/StudentController");

router.get("/students", getStudents);

module.exports = router;
