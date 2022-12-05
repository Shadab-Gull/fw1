import React from 'react'
import { Link } from "react-router-dom";
import "./Candidate.css";

export default function HSignup() {
  return (
    <div className="row">
     <div className="col-lg-5 col-md-6 col-sm-12">
           <img
            className="img-fluid img2"
            src="./images/img2.png"
            alt="homepageimg"
          /></div>
    <div className=" text-center col-md-5 col-md-5 col-sm-12 mt-5">
        <Link className="nav-link" to="/Signup"> <button type="button" id='navbtns1' className="btns1 btn-lg ml-auto">SIGN UP AS CANDIDATE</button> </Link>
        <Link className="nav-link" to="/Signup2"> <button type="button" id='navbtns1' className="btns1 btn-lg ml-auto">SIGN UP AS INSTRUCTOR</button> </Link>
    </div>
    </div>
  )
}
