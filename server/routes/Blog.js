const express = require("express");
const router = express.Router();

const {
  createBlogs,
  getBlogs,
  getSingleBlog,
} = require("../controller/BlogController.js");

router.post("/create", createBlogs);
router.get("/allBlogs", getBlogs);
router.get("/:id", getSingleBlog);

module.exports = router;
