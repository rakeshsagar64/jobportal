const mainController = require('./controller/mainController');
const recruiterController=require("./controller/recruiterController");
const express = require('express');
var app=express();

recruiterController(app);
mainController(app)

app.listen(3000);
console.log("server running @ 3000");
