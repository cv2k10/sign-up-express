var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  console.log("Main page run..");
  res.render("index");
});

app.get("/signup", function(req, res) {
  console.log("Signup page run..");
  res.render("signup");
});

app.post("/formdone", urlencodedParser, function(req, res) {
  var formData = req.body;
  res.render("formdone", { formData });
});

app.listen(8080);
