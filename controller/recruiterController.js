let recruiterController=function(app){

console.log("recruiter Controller");

app.get('recruiterLogin',(request,response) => {
  response.render('recruiterLogin');
});


app.get('recruiterRegister',(request,response) => {
  response.render('recruiterRegister');
});


app.get("postJob",function (request,response) {
    res.render("postJob");
});

}


module.exports=recruiterController;
