
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

// let RecruiterModel=function (name,email,password,contactInfo,companyName,companyDescription,verified,accountCreatedDate) {
//   this.name=name,
//   this.email=email,
//   this.password=password,
//   this.contactInfo=contactInfo,
//   this.companyName=companyName,
//   this.companyDescription=companyDescription,
//   this.verified=verified,
//   this.accountCreatedDate=accountCreatedDate
// }


module.exports=RecruiterModel;
