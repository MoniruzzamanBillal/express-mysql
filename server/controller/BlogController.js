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
