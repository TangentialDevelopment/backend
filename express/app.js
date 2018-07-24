var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
   res.send("Hi there!");
});

// "/bye" => Goodbye
app.get("/bye", function(req, res) {
    res.send("GoodBye");
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res) {
    console.log("Requested Dog")
    res.send("Meow");
});

//tell Express to listen for requests
app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server has started")
}); //process.env.IP used in every project
//if not on c9 then just use port num
