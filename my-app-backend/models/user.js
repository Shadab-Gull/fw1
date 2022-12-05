const mongoose= require ('mongoose');
module.exports = mongoose.model('User',  {role:String,name:String,email: String, password: String, cpassword: String,otp:Number});

