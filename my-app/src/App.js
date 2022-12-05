import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Signup from "./components/signupignin/Signup";
import Signup2 from "./components/signupignin/Signup2";
import Candidate from "./components/signupignin/Candidate";
import Instructor from "./components/signupignin/Instructor";
import Footer from "./components/Footer";
import Signin from "./components/signupignin/Signin";
import Signin2 from "./components/signupignin/Signin2";
import ForgetPassword from "./components/signupignin/ForgetPassword";
import ForgetPassword2 from "./components/signupignin/ForgetPassword2";
import NewSubmit from "./components/signupignin/NewSubmit";
import NewSubmit2 from "./components/signupignin/NewSubmit2";
import HSignup from "./components/signupignin/HSignup";
import HSignin from "./components/signupignin/HSignin";
import CommentForm from "./components/comments/CommentForm";
import Comment from "./components/comments/Comment";
import Comments from "./components/comments/Comments";
import Quiz from "./components/signupignin/Quiz";
import Result from "./components/signupignin/Result";

function App() {
  return (
    <>
      <div>
      
        <Navbar />
       
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Works" exact element={<Works />} />
          <Route path="/signin" exact element={<Signin />} /> 
          <Route path="/signin2" exact element={<Signin2/>} />
           <Route path="/signup" exact element={<Signup />} />
           <Route path="/signup2" exact element={<Signup2/>} />
           <Route path="/HSignup" exact element={<HSignup />} />
           <Route path="/HSignin" exact element={<HSignin />} />
           <Route path="/Candidate" exact element={<Candidate />} />
           <Route path="/Instructor" exact element={<Instructor />} />
           <Route path="/forget-pass" exact element={<ForgetPassword />} />
           <Route path="/forget-pass2" exact element={<ForgetPassword2 />} />
           <Route path="/otp" exact element={<NewSubmit />} />
           <Route path="/otp2" exact element={<NewSubmit2 />} />
           <Route path="/Comments" exact element={<Comments />} />
           <Route path="/Comment" exact element={<Comment />} />
           <Route path="/CommentForm" exact element={<CommentForm />} />
           <Route path="/Quiz" exact element={<Quiz />} />
           <Route path="/Result" exact element={<Result/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
