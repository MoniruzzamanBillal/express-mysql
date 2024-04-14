const mysql = require("mysql2");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "store",
});

module.exports = database;
