// Most of the code for this file was learned in 13-MVC, Activity 17-CatsApp, Solved, server.js
// First three variables allow use of node dependencies
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
// Provides ability to connect to burgers_controller.js
const routes = require("./controllers/burgers_controller.js");
const app = express();
// Below line establishes that we are using port 8080
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
