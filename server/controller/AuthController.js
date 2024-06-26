const database = require("../Database.js");
const jwt = require("jsonwebtoken");

//! functionality for creating new user
module.exports.userRegister = async (req, res) => {
  try {
    const data = req.body;
    const values = Object.values(data);

    // console.log(values);
    const que = `insert into user values(?)`;
    database.query(que, [values], (error, data) => {
      if (error) {
        return res.send({ error });
      }
      return res.send({ message: "User created successfully", data });
    });
  } catch (error) {
    console.log("error on registration page !!");
    res.send({ error });
  }
};

//! function for login a user
module.exports.login = async (req, res) => {
  try {
    const que = `select * from user where userEmail=? && userPassword=? `;
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
          userName: data[0]?.userName,
          userImg: data[0]?.userImg,
          userId: data[0]?.id,
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
