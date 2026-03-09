import React, { useState, useRef, useEffect } from "react";
import Project from "./project";
import "./projects.css";

function Projects() {
  const projectsData = [
    {
      title: "Educare",
      description:
        "A platform for doctors to manage reservations and patient appointments. Backend built with Node.js and MySQL, and app designed with Flutter.",
      hashtags: ["#NodeJS", "#MySQL", "#Flutter"],
      image: "src/assets/Educare.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website showcasing projects, skills, and contact info, built entirely with React.",
      hashtags: ["#React", "#Frontend", "#Portfolio"],
      image: "src/assets/moovy.png",
    },
    {
      title: "Moovy",
      description:
        "A movie platform with an integrated chatbot using LLMs (Mistral Mixtral 8x7b) via OpenRouter for movie suggestions. Built with React, Node.js, and MySQL.",
      hashtags: ["#React", "#NodeJS", "#Chatbot"],
      image: "src/assets/portfolio.png",
    },
    {
      title: "Resteau",
      description:
        "A restaurant menu platform. I worked as the frontend developer, building responsive and interactive UI components.",
      hashtags: ["#React", "#Frontend", "#UI"],

      image: "src/assets/restau.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const CARD_WIDTH = 280;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isThrottled = useRef(false);
  const accDelta = useRef(0);

  const prevProject = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, projectsData.length - 1));
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isThrottled.current) return;

      accDelta.current += e.deltaX || e.deltaY;

      if (Math.abs(accDelta.current) < 50) return;

      if (accDelta.current > 0) {
        nextProject();
      } else {
        prevProject();
      }

      accDelta.current = 0;
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 550);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="projects-page">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevProject}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <div className="projects-wrapper" ref={wrapperRef}>
            {projectsData.map((project, index: number) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;
              return (
                <div
                  key={index}
                  className={`carousel-project ${isActive ? "active" : ""}`}
                  style={{
                    transform: `translateX(${offset * CARD_WIDTH}px) scale(${
                      isActive ? 1 : 0.8
                    })`,
                    opacity: Math.abs(offset) > 1 ? 0.3 : isActive ? 1 : 0.6,
                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  }}
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    hashtags={project.hashtags}
                    image={project.image}
                  />
                </div>
              );
            })}
          </div>
          <button className="carousel-btn right" onClick={nextProject}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: "rotate(180deg)" }}
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
