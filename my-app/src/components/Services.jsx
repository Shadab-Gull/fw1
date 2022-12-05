import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <section className="services">
      <h1 className="h2">SERVICES</h1>
      <div className="row">
        <div className="feature-box col-lg-4">
          <div className="card">
            <img src="./images/img10.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">CAREER GUIDANCE</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-box col-lg-4">
          <div className="card">
            <img src="./images/img8.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">CAREER ASSESSMENT</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="feature-box col-lg-4 col-md-6 col-sm-6">
          <div className="card">
            <img src="./images/img9.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">PERSONALITY ANALYSIS</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
