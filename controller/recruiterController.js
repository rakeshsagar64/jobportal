let recruiterController=function(app){

console.log("recruiter Controller");
app.get("postJob",function (request,response) {
    res.render("postJob");
});

}


module.exports=recruiterController;
