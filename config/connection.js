const mysql = require("mysql");
require("dotenv").config();
var db;

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }
  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

if (process.env.JAWSDB_URL) {
  // db = mysql.createConnection(process.env.JAWSDB_URL);
  db = new Database({
    host: "x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "cpj7p6q4tnzs1prf",
    password: "iurtoi7z3jglfr5t",
    database: "q42zvidui88xge5p",
  });
} else {
  db = new Database({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    insecureAuth: true,
  });
}

module.exports = db;
