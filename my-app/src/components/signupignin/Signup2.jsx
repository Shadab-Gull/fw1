import { useState } from "react";
import axios from "axios";
import "./Signinup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup2() {
  const navigate = useNavigate();
  const [role] = useState("instructor");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [qual, setQual] = useState("");
  const [exp, setExp] = useState("");
  const [doc, setDoc] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = () => {
    console.log(name, email, gender, qual, exp, doc, password, cpassword);
    axios
      .post("http://localhost:5000/signup1", {
        role:role,
        name: name,
        email: email,
        gender: gender,
        qual: qual,
        exp: exp,
        doc: doc,
        password: password,
        cpassword:cpassword,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          navigate("/Signin2");
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
      <h1 className="center"> INSTRUCTOR SIGNUP </h1>
      <div className="outcard">
      
      {/* Select Role<br/>
      <div
          className="inputs"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        >
          <input type="radio" value="instructor" name="instructor" /> Instructor</div>
             */}
          <br/>
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
        Gender
        <br />
        <div
          className="inputs"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <input type="radio" value="Male" name="gender" /> Male
          <br />
          <input type="radio" value="Female" name="gender" /> Female
        </div>
        <br />
        Qualification
        <br />
        <input
          onChange={(e) => {
            setQual(e.target.value);
          }}
          value={qual}
          autoComplete="off"
          className="inputs"
          type="text"
        />{" "}
        <br />
        <br />
        Experience (If any!)
        <br />
        <input
          onChange={(e) => {
            setExp(e.target.value);
          }}
          value={exp}
          autoComplete="off"
          className="inputs"
          type="text"
        />{" "}
        <br />
        <br />
        Add Related Documents
        <input
          type="file"
          value={doc}
          onChange={(e) => {
            setDoc(e.target.value);
          }}
          className="inputs"
          class="form-control-file inputs"
          id="exampleFormControlFile1"
        ></input>
        <br />
        <br />
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
          to={"/signin2"}
        >
          {" "}
          SIGN IN{" "}
        </Link>
      </div>
    </>
  );
}

export default Signup2;
