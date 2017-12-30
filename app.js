const mainController = require('./controller/mainController');
const recruiterController=require("./controller/recruiterController");
const ejs = require('ejs');
const express = require('express');
// TODO: unit test using mocha
var app=express();
app.set('view engine','ejs');
app.use(express.static('./resources'));

recruiterController(app);
mainController(app)

app.listen(3000);

console.log("server running @ 3000");
