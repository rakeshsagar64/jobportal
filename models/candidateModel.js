//constructor of the candidate model

let CandidateModel=function (candidate) {
  this.name=candidate.name,
  this.email=candidate.email,
  this.password=candidate.password,
  this.contactInfo=candidate.contactInfo,
  this.industry=candidate.industry,
  this.experience=candidate.experience,
  this.accountCreatedDate=candidate.accountCreatedDate
}



module.exports.CandidateModel=CandidateModel;
