const database = require("../Database.js");

//! function for creating blogs
module.exports.createBlogs = async (req, res) => {
  try {
    const data = req.body;
    const values = Object.values(data);
    // console.log(values);
    const que = "insert into blogPost values(?)";
    database.query(que, [values], (error, data) => {
      if (error) {
        return res.send({ error });
      }
      return res.send({ message: "New Blog added successfully!!", data });
    });
  } catch (error) {
    console.log("error in create post  !!");
    res.send({ error });
  }
};

//! function for gettting all blogs data
module.exports.getBlogs = async (req, res) => {
  try {
    const que = "select * from blogPost";
    database.query(que, (error, data) => {
      if (error) {
        return res.send({ error });
      }

      if (data?.length < 1) {
        return res.send({ message: "Blog found" });
      }

      return res.send({ data });
    });
  } catch (error) {
    console.log("error in get all blogs !!");
    res.send({ error });
  }
};

//! function for getting particular blog
module.exports.getSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const que = "select * from blogPost where blogId=? ";

    database.query(que, [id], (error, data) => {
      if (error) {
        return res.send({ error });
      }
      if (data?.length < 1) {
        return res.send({ error: "No data found" });
      }

      return res.send({ data });
    });
  } catch (error) {
    console.log("error in get single blog fuunction !!! ");
    res.send({ error });
  }
};
