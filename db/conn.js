const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

module.exports = connection;
