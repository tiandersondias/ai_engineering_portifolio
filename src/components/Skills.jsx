import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        <div className="skills-content">
          <div className="skill-card">
            <div className="skill-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h3>Machine Learning</h3>
            <p>
              Experience in developing ML models using frameworks like
              TensorFlow and PyTorch.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z" />
              </svg>
            </div>
            <h3>Web Development</h3>
            <p>
              Proficient in building responsive web applications with React,
              Node.js, and more.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 10v-4h-4v4h4zm0 8v-4h-4v4h4zm-8-8v-4h-4v4h4zm0 8v-4h-4v4h4zm16-16h-24v24h24v-24zm-4 20h-16v-16h16v16z" />
              </svg>
            </div>
            <h3>Data Science</h3>
            <p>
              Skilled in analyzing and visualizing data to extract valuable
              insights.
            </p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
              </svg>
            </div>
            <h3>Mobile Development</h3>
            <p>
              Experience in building cross-platform mobile apps using React
              Native.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
