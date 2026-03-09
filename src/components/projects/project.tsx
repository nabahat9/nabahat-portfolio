import "./project.css";

// Define the type for props
interface ProjectProps {
  title: string;
  description: string;
  hashtags: string[]; // <- explicitly a string array
  image: string;
}

function Project({ title, description, hashtags, image }: ProjectProps) {
  return (
    <div className="project-card">
      <div
        className="card-picture"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="card-description">
        <div className="card-big-title">{title}</div>
        <div className="card-description-text">{description}</div>
        <div className="card-hashtags">
          {hashtags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;