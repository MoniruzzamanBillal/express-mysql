const express = require("express");
const database = require("./Database.js");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//routers
const studentRouter = require("./routes/Student.js");
const authRouter = require("./routes/Auth.js");

const app = express();
const port = process.env.port || 8000;

// middlewires
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api", studentRouter);
app.use("/api/auth", authRouter);

app.get("/", async (req, res) => {
  res.send({ message: "Server is running !!" });
});

app.listen(port, () => {
  console.log(`Listening from port ${port} !!`);
});
