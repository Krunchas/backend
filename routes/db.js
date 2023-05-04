const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'syr123456haha',
  database: 'git'
})

module.exports = db;