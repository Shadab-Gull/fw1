const mongoose= require ('mongoose');
module.exports = mongoose.model('Instructor',  {role:String,name:String, email: String,gender:String,qual:String,exp:String,doc:String, password: String, cpassword:String});
