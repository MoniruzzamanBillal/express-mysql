const database = require("../Database.js");

//! functionality for getting student info
module.exports.getStudents = async (req, res) => {
  try {
    const que = "select * from student";
    database.query(que, (error, data) => {
      if (error) {
        return res.send({ error });
      }
      return res.send({ data });
    });
  } catch (error) {
    console.log("error in get students method!!");
    res.send({ error });
  }
};
