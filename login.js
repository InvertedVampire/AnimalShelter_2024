const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "basketball1014",
    database: "animal_shelter"
});

//connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database")
});

app.get("/",function(req,res){
    res.sendFile(__dirname + "/homepage.html");
})

app.post("/",encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    connection.query("select * from loginuser where user_name=? and user_pass = ?",[username,password],function(error,results,fields){
        if(results.length > 0){
            res.redirect("/homepage");
        } else{
            res.redirect("/");
        }
        res.end();
    })
})

//when login is a success
app.get("/homepage",function(req,res){
    res.sendFile(__dirname + "/homepage.html")
})

//set app port
app.listen(5100);