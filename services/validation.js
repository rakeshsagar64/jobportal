const bcrypt = require('bcryptjs');
// TODO: which is better assigning annonymus function to a variable or a function with name

let passwordVerifier=function (data,callback) {
console.log("---------password verifier-----------");
  bcrypt.genSalt(10,callback,(err,salt) => {

    bcrypt.hash(data.password,salt,callback,(err,hash) => {
      data.password=hash;
    
      callback(data);
    });

  });

}





module.exports.passwordVerifier=passwordVerifier;
