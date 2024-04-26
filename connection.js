var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded();
const app = express();


app.use("/styles", express.static("styles"));

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Jacob1lee",
    database: "Animal_Shelter"
});

con.connect(function(err) {
    if (err) throw err;
    else console.log("Connected to database!")
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/reclaim.html");
}) 

app.post("/", encoder, function(req, res){
    var intakenumber = req.body.intakenumber;

    con.query("SELECT IntakeNumber FROM Animals WHERE IntakeNumber = ?", [intakenumber], function(err, results, fields){
        if (results.length > 0) {
            con.query("DELETE FROM Animals WHERE IntakeNumber = ?", [intakenumber], function(err, results, fields) {
                if (err) {
                  console.error('Error deleting animal:', err);
                  res.status(500).send('Error deleting animal');
                  return;
                }
                console.log('Animal deleted successfully');
                res.send('Animal deleted successfully');
            });
        }
        else {
            res.redirect("/");
        }
    })
})

//when reclaim is successful
app.get("/payment", function(req, res){
    res.sendFile(__dirname + "/payment.html")
})

//set app port
app.listen(4100);

