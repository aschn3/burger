var mysql = require("mysql");
var connection;

if (process.ev.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

 connection = mysql.createConnection({
  host: "localhost",
  user: "andy",
  password: "password123",
  database: "burgers_db"
});
};


connection.connect();
module.exports = connection;