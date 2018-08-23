var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//   name: "Mrs. Norris",
//   age: 7,
//   temperament: "Evil"
// });
//
// george.save(function(err, cat){
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("saved cat");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Nice"
}, function(err, cat) {
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

Cat.find({}, function(err, cats) {
  if (err) {
    console.log(err);
  } else {
    console.log(cats);
  }
});
