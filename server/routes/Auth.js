const express = require("express");
const router = express.Router();
const { login, userRegister } = require("../controller/AuthController.js");

router.post("/userRegister", userRegister);
router.post("/login", login);

module.exports = router;
