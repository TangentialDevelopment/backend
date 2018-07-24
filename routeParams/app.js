var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
   res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:type", function(req, res) {
    console.log(req.params);
    var animal = req.params.type.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "purr",
        goldfish: "..."
    }
    var sound = sounds[animal];

    // if (type === "pig") {
    //     sound = "Oink";
    // } else if (type === "cow") {
    //     sound = 'Moo';
    // } else if (type === "dog") {
    //     sound = 'woof woof';
    // } else {
    //     res.send("Sorry, page not found... what are you doing with your life?");
    // }

    res.send("the " + animal + " says '" + sound + "'");
});

app.get("/repeat/:text/:number", function(req, res) {
    console.log(req.params);
    var text = req.params.text;
    var num = Number(req.params.number);
    var final = ""

    for (var i=0; i<num; i++) {
        final += text + " ";
    }
    res.send(final);
});

app.get("*", function(req, res) {
    console.log("no route")
    res.send("Sorry, page not found... what are you doing with your life?");
}); // always put * last because the routes are searched sequencentially until one matching is found then stops

//tell Express to listen for requests
app.listen(process.env.PORT, process.env.IP, function (){
    console.log("Server has started")
}); //process.env.IP used in every project
//if not on c9 then just use port num
