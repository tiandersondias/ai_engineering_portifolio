import React from "react";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Anderson</span>
              <br />
              Software Developer
            </h1>
            <p>
              A passionate developer specializing in data analytics, machine learning, AI, and
              full-stack development.
            </p>
            <div>
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>
            
          </div>
          <div className="hero-image">
            <img src="/api/placeholder/400/320" alt="Profile Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
