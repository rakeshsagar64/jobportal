//establishes the schema and gives the connection reference
const mongoose = require('mongoose');
const mongodb = require('mongodb');


const userSchema=mongoose.Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  contactInfo:{
    type:String,
    required:true
  },
  companyName:{
    type:String,
    required:true

  },
  companyDescription:{
    type:String,
    required:true
  },
  verified:{
    type:Boolean

  },
  accountCreatedDate:{
    type:String
    }

});


module.exports=mongoose.model('recruiters',userSchema);
