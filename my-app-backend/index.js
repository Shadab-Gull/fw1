const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userController = require("./controller/user");
const instructorController = require("./controller/instructor");

const port = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/tests", (err) => {
  if (err) {
    console.log(" DB Err");
  } else {
    console.log("DB Connected"); 
  }
});

app.post("/signup", userController.signup);
app.post("/signin", userController.signin);
app.post("/send-otp", userController.sendotp);
app.post("/submit-otp", userController.submitotp);

app.post("/signup1", instructorController.signup1);
app.post("/signin1", instructorController.signin1);
app.post("/send-otp1", instructorController.sendotp1);
app.post("/submit-otp1", userController.submitotp);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
