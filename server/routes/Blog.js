const express = require("express");
const router = express.Router();

const { createBlogs } = require("../controller/BlogController.js");

router.post("/create", createBlogs);

module.exports = router;
