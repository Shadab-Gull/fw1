import React from 'react'
import'./About.css'

export default function About() {
  return (
    <section className="about" id="features">
  <h1 className="h1">ABOUT US</h1>
    <div className="row">
<div className="feature-box col-lg-4 mt-5">

    <img className="Aimg" src="./images/img5.png" alt="whoarewe" />
  
    <h3>Who We Are?</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium voluptate ipsum iste magni iusto ipsam.</p>
  </div>
  <div className="feature-box col-lg-4 mt-5">
    
    <img className="Aimg" src="./images/img6.png" alt="whatwedo" />
    <h3>What We Do?</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime aut dolorem tempora quis inventore?</p>
  </div>
<div className="feature-box col-lg-4 mt-5">
<img className="Aimg" src="./images/img7.png" alt="whatwedo" />
    <h3>Why Should You Choose Us?</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit suscipit ex rerum iure dolorem id.</p>
  </div>
</div>
  </section>
  )
}
