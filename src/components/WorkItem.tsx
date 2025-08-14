import React from 'react';

interface WorkItemProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  techList?: string[];
}

const WorkItem: React.FC<WorkItemProps> = ({ title, description, image, link, techList }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3>{title}</h3>
    <p>{description}</p>
    {image && <img src={image} alt={title} style={{ maxWidth: '200px' }} />}
    {link && (
      <p>
        <a href={link}>View Project</a>
      </p>
    )}
    {techList && (
      <ul>
        {techList.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
    )}
  </div>
);

export default WorkItem;
