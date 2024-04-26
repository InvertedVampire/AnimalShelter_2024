import connection from "./connection";

// this script handles login info

function readLoginInfo
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT Password FROM Employees", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });