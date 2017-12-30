
//constructor of recruter model
let RecruiterModel=function (recruiter) {
  this.name=recruiter.name,
  this.email=recruiter.email,
  this.password=recruiter.password,
  this.contactInfo=recruiter.contactInfo,
  this.companyName=recruiter.companyName,
  this.companyDescription=recruiter.companyDescription,
  this.verified=recruiter.verified,
  this.accountCreatedDate=recruiter.accountCreatedDate
}



module.exports.RecruiterModel=RecruiterModel;
