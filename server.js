//MySQL, Node, Express, Handlebars and a ORM
//MVC
require('dotenv').config();

const express = require("express");
const exphbs = require("express-handlebars");
const routerController = require('./controllers/burgers_controller');
const mysql = require("mysql");

// const burger = require('./models/burger')
const app=express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//for serving media ssets
var PORT = process.env.PORT || 8080;

routerController(app)
// app.use(routes)

app.use(express.static('public'))


app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`);
})




