const express = require("express");

const router = express.Router();

router.get("/students", async (req, res) => {
  try {
    res.send({ message: "get all students!!" });
  } catch (error) {
    console.log("Error in get student route ");
    res.send({ error });
  }
});

module.exports = router;
