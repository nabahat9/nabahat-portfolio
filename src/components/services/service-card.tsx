import React from "react";
import "./service-card.css";

interface ServiceCardProps {
  image?: string; // optional now
  icon?: React.ReactNode; // new prop for icon
  title: string;
  description: string;
}

function ServiceCard({ image, icon, title, description }: ServiceCardProps) {
  return (
    <div className="service-card-container">
      {/* Show icon if provided, otherwise show image */}
      <div className="service-card-image">
        {icon ? (
          <div className="service-icon">{icon}</div>
        ) : image ? (
          <div
            className="service-card-image-bg"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ) : null}
      </div>

      <div className="service-card-title">{title}</div>
      <div className="service-card-description">{description}</div>
    </div>
  );
}

export default ServiceCard;
