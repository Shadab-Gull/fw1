import React from 'react'
import { Link } from 'react-router-dom';
import'./Home.css'
export default function Home() {
  return (
    <section className="main-container">

    <div className="txtover"><img src="./images/img1.jpg" class="img-fluid" alt="homepageimg"/></div>
    <div className="overlay"><h1 className="h1"><strong className="brand-name">CAREER SPAN</strong></h1>
      <h2>Choose Help, Not Suffering</h2>
      <div className="mt-3">
      <Link className="link" to="/HSignin"><button className="btn-1">Get Started</button></Link>
      </div></div>
    </section>
   
  )
}
