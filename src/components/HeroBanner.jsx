import React from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="hero-banner-portfolio lg-container">
      <div className="container">
        <div className="illustration-container">
          <img src="images/assets/ils_20.png" alt="ils" />
        </div>
        {/* End .illustration-container */}

        <div className="row">
          <div className="col-lg-6">
            <h2>Hi, I'm Belisa</h2>
            <h1 className="hero-heading">
              <span>Front-End</span> Developer.
            </h1>
            <p className="hero-sub-heading"></p>
            <Link
              to="/"
              className="btn-portfolio-contact"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              {" "}
              <a href="mailto:belisacodes@gmail.com">Contact me! </a>
            </Link>{" "}
            <p className="term-text">
              Don't hesitate and contact me for any project or question!{" "}
            </p>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default HeroBanner;
