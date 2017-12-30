const bodyParser = require('body-parser');
const RecruiterModel = require('../models/recruiterModel');



let urlencoded=bodyParser.urlencoded({extends:false});

let recruiterController=function(app){

  console.log("recruiter Controller");

  app.post('/recruiterLogin',urlencoded,(request,response) => {
    console.log("login for recruiter");
  });

//registeration method for recruiter
//creates an object of the model and sends it to the encrypt password method
// TODO: email verification module
  app.post('/recruiterRegister',urlencoded,(request,response) => {
    console.log("register for recruiter");

    let recruiterData=new RecruiterModel({
        name:request.body.name,
        email:request.body.email,
        password:request.body.password,
        contactInfo:request.body.contactInfo,
        companyName:request.body.companyName,
        companyDescription:request.body.companyDescription,
        verified:false,
        accountCreatedDate:new Date(),
      });
      console.log(recruiterData);
      // TODO: import bcrypt
      // TODO: write password encrypt method using bcrypt

      
  });


  app.get("postJob",function (request,response) {
      res.render("postJob");
  });

}


module.exports=recruiterController;
