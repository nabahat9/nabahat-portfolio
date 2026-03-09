import ServiceCard from "./service-card";
import "./services.css";
import { SiReact, SiNodedotjs, SiOpenai, SiFlutter, SiHeroku, SiPython } from "react-icons/si";

function Services() {
  const servicesData = [
    {
      icon: <SiReact size={50} color="#61dafb" />,
      title: "Frontend Development",
      description:
        "Building interactive and responsive UIs with React, HTML, CSS, and JavaScript.",
    },
    {
      icon: <SiNodedotjs size={50} color="#68a063" />,
      title: "Backend & Database",
      description:
        "Creating REST APIs with Node.js & Express and managing relational and NoSQL databases like MySQL and MongoDB.",
    },
    {
      icon: <SiOpenai size={50} color="#412991" />,
      title: "AI Chatbots & LLM Integration",
      description:
        "Integrating large language models and building chatbots or conversational AI features, demonstrated in real applications.",
    },
    {
      icon: <SiFlutter size={50} color="#02569b" />,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile apps using Flutter and Dart with responsive and scalable UI/UX.",
    },
    {
      icon: <SiHeroku size={50} color="#430098" />,
      title: "Deployment & DevOps",
      description:
        "Deploying web and mobile apps on platforms like Vercel, Netlify, and Heroku, with CI/CD configurations.",
    },
    {
      icon: <SiPython size={50} color="#FFD43B" />,
      title: "Machine Learning & Data",
      description:
        "Analyzing data and building ML models using Python, Pandas, and Scikit-learn to enhance applications.",
    },
  ];

  return (
    <div className="services-container">
      <div className="services-big-title">My Services</div>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}   // pass the icon instead of image
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;