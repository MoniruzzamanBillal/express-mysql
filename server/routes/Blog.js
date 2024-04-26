const express = require("express");
const router = express.Router();

const {
  createBlogs,
  getBlogs,
  getSingleBlog,
  upudateBlog,
} = require("../controller/BlogController.js");

router.post("/create", createBlogs);
router.get("/allBlogs", getBlogs);
router.get("/:id", getSingleBlog);
router.patch("/:id", upudateBlog);

module.exports = router;
