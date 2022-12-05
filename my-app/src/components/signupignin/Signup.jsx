import { useState } from "react";
import axios from "axios";
import "./Signinup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [role] = useState("candidate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = () => {
    console.log(name,email, password, cpassword);
    axios
      .post("http://localhost:5000/signup", {
        role:role,
        name: name,
        email: email,
        password: password,
        cpassword:cpassword,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/Signin");
          alert("Signup success.");
        } else {
          alert("Error.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className="center"> CANDIDATE SIGNUP </h1>
      <div className="outcard">
      
      {/* Select Role<br/>
      <div
          className="inputs"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <input type="radio" value="candidate" name="candidate" /> Candidate</div> */}
          Full Name
        <br />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          autoComplete="off"
          className="inputs"
          type="text"
        />{" "}
        <br /> <br />
             <br/>
              Email
        <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          autoComplete="off"
          className="inputs"
          type="email"
        />{" "}
        <br /> <br />
        Password
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          className="inputs"
          type="password"
        />{" "}
        <br /> <br />
        Confirm Password
        <input
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
          value={cpassword}
          className="inputs"
          type="password"
        />{" "}
        <br /> <br />
        <button onClick={handleSubmit} className="btns">
          {" "}
          SUBMIT{" "}
        </button>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/signin"}
        >
          {" "}
          SIGN IN{" "}
        </Link>
      </div>
    </>
  );
}

export default Signup;
