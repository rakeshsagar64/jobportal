const bodyParser = require('body-parser');
const RecruiterModel = require('../models/recruiterModel').RecruiterModel;
const Validation = require('../services/validation');
const Database = require('../services/database').RecruiterData;

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

      Validation.passwordVerifier(recruiterData,(err,encryptedPassword) => {
        if(err) throw err;
        recruiterData.password=encryptedPassword;

        //correct output comes here
        //call the database insert method
        //convert your model object to mongoose model

        let data=new Database(recruiterData);
        //save in mongodb

        let savedData=data.save(recruiterData,(err,recruiter) => {
          if (err) {
            response.json({success:false,msg:'failed to register the user'});
          } else {
            response.json({success:true,msg:'registration successfull'});
          }
        });

      });





  });


  app.get("postJob",function (request,response) {
      res.render("postJob");
  });

}


module.exports=recruiterController;
