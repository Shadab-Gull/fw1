import React from 'react'
import { Link } from "react-router-dom";
import "./Candidate.css";

export default function HSignin() {
   return (
    <div className="row">
     <div className=" text-center col-md-5 col-md-5 col-sm-12 mt-5">
    <h1>LOGIN AS</h1>
    <br />
    <Link className="nav-link" to="/Signin"> <button type="button" id='navbtns1' className="btns1 btn-lg ml-auto">CANDIDATE</button> </Link>
        <Link className="nav-link" to="/Signin2"> <button type="button" id='navbtns1' className="btns1 btn-lg ml-auto">INSTRUCTOR</button> </Link>
    </div>
    <div className="col-lg-5 col-md-6 col-sm-12">
          <img
            className="img-fluid img2"
            src="./images/img4.png"
             alt="homepageimg"
        /></div> 
        </div>
  )
}
