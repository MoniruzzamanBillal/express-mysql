const express = require("express");
const database = require("./Database.js");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//routers
const studentRouter = require("./routes/Student.js");

const app = express();
const port = process.env.port || 8000;

// middlewires
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", studentRouter);

app.get("/getBook", async (req, res) => {
  const que = "select * from books";
  database.query(que, (error, data) => {
    if (error) {
      return res.send(error);
    }
    res.send({ data });
  });
});

app.get("/", async (req, res) => {
  res.send({ message: "Server is running !!" });
});

app.listen(port, () => {
  console.log(`Listening from port ${port} !!`);
});
