let recruiterController=function(app){

console.log("recruiter Controller");
app.get("postJob",function (request,response) {
    res.render("post");
});

}


module.exports=recruiterController;
