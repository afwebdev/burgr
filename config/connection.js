const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "mphyulap8sfjx51z",
  password: "l4bcuwrx5z63hgm7",
  database: "cpgmctnfd6he2cms"
});

connection.connect(err => {
  if (err) throw err;
});

module.exports = connection;
