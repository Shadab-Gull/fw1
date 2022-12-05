import React from 'react'
import Home from './Home';
import About from './About';
import Services from './Services';
import Works from './Works';

export default function Pages() {
  return (
    <>
    <Home/>
    <About/>
    <Works/>
    <Services/>
    </>
  )
}
// import React, { useState } from "react";
// import "./Signup.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   const register = () => {
//     const { name, email, password, cpassword } = user;
//     if (name && email && password && password === cpassword) {
//       // alert("posted")
//       axios.post("http://localhost:9002/Signup", user).then((res) => {
//         alert(res.data.message);
//         navigate("/Login");
//       });
//     } else {
//       alert("invalid input");
//     }
//   };
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-6 col-md-6 col-sm-12">
//           <img
//             className="img-fluid"
//             src="./images/img4.png"
//             alt="homepageimg"
//           />
//         </div>
//         <div className=" text-center col-md-6 col-md-6 col-sm-12 mt-5">
//           <h2 className="form-title">Sign Up</h2>
//           <form className="register-form" id="register-form">
//             <div class="form-group mb-3 mt-3">
//               <label htmlFor="name">
//                 <i class="zmdi zmdi-account material-icons-name"></i>
//               </label>
//               <input
//                 className="form1"
//                 type="text"
//                 name="name"
//                 value={user.name}
//                 id="name"
//                 autoComplete="off"
//                 placeholder="Your Name"
//                 onChange={handleChange}
//               />
//             </div>
//             <div class="form-group mb-3 mt-3">
//               <label htmlFor="email">
//                 <i class="zmdi zmdi-email material-icons-name"></i>
//               </label>
//               <input
//                 type="email"
//                 className="form1"
//                 name="email"
//                 value={user.email}
//                 id="email"
//                 autoComplete="off"
//                 placeholder="Your Email"
//                 onChange={handleChange}
//               />
//             </div>
//             <div class="form-group mb-3 mt-3">
//               <label htmlFor="password">
//                 <i class="zmdi zmdi-lock material-icons-name"></i>
//               </label>
//               <input
//                 className="form1"
//                 type="password"
//                 name="password"
//                 value={user.password}
//                 id="password"
//                 autoComplete="off"
//                 placeholder="Enter password"
//                 onChange={handleChange}
//               />
//             </div>
//             <div class="form-group mb-3 mt-3">
//               <label htmlFor="cpassword">
//                 <i class="zmdi zmdi-lock material-icons-name"></i>
//               </label>
//               <input
//                 className="form1"
//                 type="password"
//                 name="cpassword"
//                 value={user.cpassword}
//                 id="cpassword"
//                 autoComplete="off"
//                 placeholder="Confirm Your password"
//                 onChange={handleChange}
//               />
//             </div>

//             <button
//               type="submit"
//               name="signup"
//               id="signup"
//               class="btn1 "
//               onClick={register}
//             >
//               SIGN UP
//             </button>
//           </form>
//           <div className="mt-4 ml-4">
//             <p id="p1">
//               Already Have an Account?
//               <Link className="link" to="/Login">
//                 <button className="btn-2">Log In</button>
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "./Login.css";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";

// const Login = ({updateUser})=> {
  
//   const navigate=useNavigate ()
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
 
//   const handleChange = e => {
//     const { name, value } = e.target
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
//   const login=()=>{
//     axios.post("http://localhost:9002/Login", user)
//     .then( res =>{ alert(res.data.message)
//       updateUser(res.data.user)
//     navigate("/Candidate")
//     })
//   }

//   return (
//     <div className="container">
      
//       <div className="row">
//         <div className=" text-center col-md-6 col-md-6 col-sm-12 mt-5">
//           <img className="icon-img " src="./images/img3.png" alt="icon" />
//           <form>
//             <div className="mb-4 mt-4">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//                 placeholder="Enter Email"
//                 name="email"
//                 value={user.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//                 placeholder="Enter Password"
//                 name="password"
//                 value={user.password}
//                 onChange={handleChange}
//               />
//             </div>
//             <button type="submit" className="form-control btn" onClick={login}>
//               Login
//             </button>
//           </form>
//           <div className="mt-4">
//             <p id="p1">
//               Don't Have an Account?{" "}
//               <Link className="link" to="/Signup">
//                 <button className="btn-2">Sign Up</button>
//               </Link>
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-6 col-sm-12">
//           <img
//             className="img-fluid img2"
//             src="./images/img2.png"
//             alt="homepageimg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login