const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "blogManagement",
});

module.exports = database;
