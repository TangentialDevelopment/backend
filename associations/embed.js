var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

// post - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// user - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]},
  {usePushEach: true}
);
var User = mongoose.model("User", userSchema);

// var newUser = new User ({
//   email: "hermione@hogwarts.edu",
//   name: "Hermione Granger"
// });
//
// newUser.posts.push({
//   title: "How to brew polyjuice postion",
//   content: "Just kidding. Go to postions"
// });
//
// newUser.save(function(err, user) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "reflections on Apples",
//   content: "They are delicious"
// });
// newPost.save(function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Hermione Granger"}, function(err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
    user.posts.push({
      title: "3 things I really hate",
      content: "Voldemort. Voldemort. Voldemort"
    });
    user.save(function(err, user) {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
