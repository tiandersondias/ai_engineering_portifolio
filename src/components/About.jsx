import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src="/api/placeholder/400/320" alt="About Image" />
          </div>
          <div className="about-text">
            <h3>
              A passionate developer who loves to build innovative solutions
            </h3>
            <p>
              I'm a software developer with experience in building applications
              using various technologies. My journey in tech started when I was
              in college, and since then, I've been continuously learning and
              growing in this field.
            </p>
            <p>
              I specialize in machine learning, artificial intelligence, and
              full-stack web development. I enjoy solving complex problems and
              creating intuitive, user-friendly applications that make a
              positive impact.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through writing technical articles.
            </p>
            <a href="#" className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
