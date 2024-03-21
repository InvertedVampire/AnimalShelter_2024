const mysql = require('mysql'); // commandL: npm i mysql
const dbPassword = ''; //Your Password

// MySQL Connection info
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: dbPassword,
  database: 'animal_shelter'
});

// Connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;