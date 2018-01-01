const mainController = require('./controller/mainController');
const recruiterController=require("./controller/recruiterController");
const mongoose = require('mongoose');
const appConfig = require('./config/appconfig');



mongoose.connect(appConfig.database);
mongoose.connection.on('connected',()=>{
  console.log("db connected!!! "+appConfig.database);
});


mongoose.connection.on('error',(err)=>{
  console.log("db error!!! "+err);
});


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
