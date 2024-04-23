const mysql = require('mysql'); // commandL: npm i mysql

// MySQL Connection info
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'animal_shelter'
});

// Connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;