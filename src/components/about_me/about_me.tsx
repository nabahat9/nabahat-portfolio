import { useState } from "react";
import "./about_me.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="about">
      <div className="about-container">
        <div className="left-side">
          <div className="big-title">Hi I'm Nabahat Imane </div>
          <div className="description">
            I am a full-stack developer with a strong focus on backend
            development using Node.js , and frontend experience with React. I
            build scalable, maintainable applications with clean architecture,
            real-time features, and robust database management. I also have
            experience in algorithms, machine learning, and data processing,
            which helps me solve problems efficiently and design systems
            thoughtfully.
          </div>
          <div className="buttons">
            {/* Contact button scrolls to contact section */}
            <a href="#contact">
              <button className="contact-me-btn">Contact</button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nabahat-merzouk-bb1b96273/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="link-in-btn">
                <FaLinkedin size={25} />
              </button>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nabahat9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="github-btn">
                <FaGithub size={24} />
              </button>
            </a>
          </div>
        </div>
        <div className="right side"></div>
      </div>
    </div>
  );
}

export default AboutMe;
