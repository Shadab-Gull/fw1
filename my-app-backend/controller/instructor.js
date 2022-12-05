const InstructorModel = require("../models/instructor");
const nodemailer = require("nodemailer");

module.exports.signup1 = (req, res) => {
  console.log(req.body);
  const newUser = new InstructorModel ({
    role:req.body.role,
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    qual: req.body.qual,
    exp: req.body.exp,
    doc: req.body.doc,
    password: req.body.password,
    cpassword:req.body.cpassword,
  });
  newUser
    .save()
    .then(() => {
      res.send({ code: 200, message: "Signup successful" });
    })
    .catch((err) => {
      res.send({ code: 500, message: "Signup Err" });
    });
};
module.exports.signin1 = (req, res) => {
    console.log(req.body.email);
  
    InstructorModel.findOne({ email: req.body.email })
      .then((result) => {
        console.log(result, "11");
  
        if (result.password !== req.body.password) {
          res.send({ code: 404, message: "password wrong" });
        } else {
          res.send({
            email: result.email,
            code: 200,
            message: "user Found",
            token: "hfgdhg",
          });
        }
      })
      .catch((err) => {
        res.send({ code: 500, message: "user not found" });
      });
  };
  module.exports.sendotp1 = async (req, res) => {
    console.log(req.body);
    const _otp = Math.floor(100000 + Math.random() * 900000);
    console.log(_otp);
    let user = await InstructorModel.findOne({ email: req.body.email });
    // send to user mail
    if (!user) {
      res.send({ code: 500, message: "user not found" });
    }
   
    let testAccount = await nodemailer.createTestAccount();
   
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
  
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  
    let info = await transporter.sendMail({
      from: "shadabgull54@gmail.com",
      to: req.body.email, // list of receivers
      subject: "OTP", // Subject line
      text: String(_otp),
      html: `<html>
                          < body >
                          Hello and welcome
                      </ >
                     </html > `,
    });
    if (info.messageId) {
      console.log(info, 84);
      InstructorModel.updateOne({ email: req.body.email }, { otp: _otp })
        .then((result) => {
          res.send({ code: 200, message: "otp send" });
        })
        .catch((err) => {
          res.send({ code: 500, message: "Server err" });
        });
    } else {
      res.send({ code: 500, message: "Server err" });
    }
  };

  module.exports.submitotp1 = (req, res) => {
    console.log(req.body);
  
    InstructorModel.findOne({ otp: req.body.otp })
      .then((result) => {
        //  update the password
  
        InstructorModel.updateOne(
          { email: result.email },
          { password: req.body.password }
        )
          .then((result) => {
            res.send({ code: 200, message: "Password updated" });
          })
          .catch((err) => {
            res.send({ code: 500, message: "Server err" });
          });
      })
      .catch((err) => {
        res.send({ code: 500, message: "otp is wrong" });
      });
  };