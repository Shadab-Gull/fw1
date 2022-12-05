import React from "react";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(window.localStorage.getItem("TOKEN"));
  },[]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {" "}
          <img id="img1" src="./images/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link active" to="/About">
                ABOUT US
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Works">
                HOW IT WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                {" "}
                OUR SERVICES
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <Link className="nav-link" to="/Comments">
                  {" "}
                  COMMENTS
                </Link>
              </li>
            ) : (
              <Link className="nav-link" to="/HSignup">
            
            <button type="button" id="navbtn12" className="btn btn-lg ml-auto">
              SIGN UP
            </button>
          </Link>
            )}
          </ul>

         
        </div>
      </div>
    </nav>
  );
}
