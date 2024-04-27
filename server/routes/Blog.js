const express = require("express");
const router = express.Router();

const {
  createBlogs,
  getBlogs,
  getSingleBlog,
  upudateBlog,
  getUserBlog,
  deleteBlog,
} = require("../controller/BlogController.js");

router.post("/create", createBlogs);
router.get("/allBlogs", getBlogs);
router.get("/:id", getSingleBlog);
router.get("/user/:id", getUserBlog);
router.patch("/:id", upudateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;
