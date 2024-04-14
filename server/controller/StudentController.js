const database = require("../Database.js");
const jwt = require("jsonwebtoken");

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

//! functionality for creating new student
module.exports.createStudent = async (req, res) => {
  try {
    const data = req.body;
    const values = Object.values(data);

    // console.log(values);

    const que = `insert into student values(?)`;

    database.query(que, [values], (error, data) => {
      if (error) {
        return res.send({ error });
      }
      return res.send({ message: "student created successfully", data });
    });
  } catch (error) {
    console.log("error in create students method!!");
    res.send({ error });
  }
};

//! function for login a user
module.exports.login = async (req, res) => {
  try {
    const que = `select * from student where userEmail=? && userPassword=? `;
    const { userEmail, userPassword } = req.body;

    database.query(que, [userEmail, userPassword], (error, data) => {
      if (error) {
        return res.send({ error });
      }

      if (data?.length < 1) {
        return res.send({ error: "User dont exist!! " });
      }
      // console.log(data[0]);

      const token = jwt.sign(
        {
          userEmail: data[0]?.userEmail,
          name: data[0]?.name,
          studentImg: data[0]?.studentImg,
        },
        "secretKey",
        { expiresIn: "6h" }
      );

      return res.send({ token, message: "Login successfully !! " });
    });
  } catch (error) {
    console.log("error in login method!!");
    res.send({ error });
  }
};
