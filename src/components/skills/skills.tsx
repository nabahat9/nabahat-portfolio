import {
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiFlutter,
  SiDocker,
  SiVercel,
  SiRender, // assuming you install react-icons/si
} from "react-icons/si";
import "./skills.css";

function Skills() {
  const skills = [
    // Web Dev
    { name: "React", icon: <SiReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#3C873A" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
    { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
    // Mobile Dev
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
    // Machine Learning
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
    { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "#F7931E" },
    { name: "Pandas", icon: <SiPandas />, color: "#150458" },
    // Deployment / DevOps
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "Render", icon: <SiRender />, color: "#0085FF" },
    { name: "Vercel", icon: <SiVercel />, color: "#000000" },
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-scroll">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
