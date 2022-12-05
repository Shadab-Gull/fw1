import { useState } from "react";
import axios from "axios";
 import "./Signinup.css";            
 import { useNavigate } from "react-router-dom";

function ForgetPassword2() {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(email);
     axios.post("http://localhost:5000/send-otp1", {
         email: email,
       })
       .then((res) => {
         console.log(res.data);
        if (res.data.code === 200) {
          navigate('/otp2')
         } 
else {
          alert("Email / Server Error.");
        }
       })
      .catch((err) => {
         console.log(err);
      });
   };

   return (
    <>
      <h1 className="center"> Forget Password</h1>
       <div className="outcard">
        Email <br />
         <input
          value={email}
          onChange={(e) => {
           setEmail(e.target.value);
          }} 
          className="inputs"
          type="text"
        />
         <br />
        <br />
         <button 
onClick={handleSubmit} 
className="btns">
          SEND OTP
        </button>
      </div>
     </>
   ) }

 export default ForgetPassword2;
