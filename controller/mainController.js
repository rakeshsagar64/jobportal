
let mainController=function(app){

console.log("main controller");

app.get('/',function (request,response) {
  response.render('home');
});

app.get('/login',(request,response) => {
  response.render('candidateLogin');
});

app.get('/register',(request,response) => {
  response.render('candidateRegister');
});

app.get('/recruiter',function(request,response){

  response.render('recruiterPortal');

});


}


module.exports=mainController;
