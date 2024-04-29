const mysql = require('mysql'); // commandL: npm i mysql

// MySQL Connection info
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'animal_shelter',
  insecureAuth: true,
});

// Connect to database
connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
