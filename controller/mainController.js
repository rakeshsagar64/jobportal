const bodyParser = require('body-parser');
const candidateModel = require('../models/candidateModel').CandidateModel;
const Validation = require('../services/validation');
const Database = require('../services/database').candidateData;

let urlencoder=bodyParser.urlencoded({'extends':false});


let mainController=function(app){

console.log("main controller");

app.get('/',function (request,response) {

  response.render('home');
});

app.post('/candidateRegister',urlencoder,(request,response) => {
    let candidateData=new candidateModel({
      name:request.body.name,
      email:request.body.email,
      password:request.body.password,
      contactInfo:request.body.contactInfo,
      industry:request.body.industry,
      experience:request.body.experience,
      accountCreatedDate:new Date(),
    });

    console.log('-----candidateData in main controller-------');
    console.log(candidateData);

    Validation.passwordVerifier(candidateData,(err,encryptedPassword) => {

      if(err) throw err;
      candidateData.password=encryptedPassword;
        let data=new Database(candidateData);

        data.save(candidateData,(err,candidate) => {

          if (err) {
            console.log(err);
            response.json({success:false,msg:'failed to register the user'});
          } else {
            response.json({success:true,msg:'registration successfull'});
          }
          
        });
    });
});


app.get('/recruiter',function(request,response){

  response.render('recruiterPortal');

});


}


module.exports=mainController;
