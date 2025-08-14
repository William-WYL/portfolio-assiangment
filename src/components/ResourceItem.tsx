import React from 'react';

interface ResourceItemProps {
  title: string;
  image?: string;
  summary: string;
  link?: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({ title, image, summary, link }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3>{title}</h3>
    {image && <img src={image} alt={title} style={{ maxWidth: '100px' }} />}
    <p>{summary}</p>
    {link && (
      <p>
        <a href={link}>Visit Resource</a>
      </p>
    )}
  </div>
);

export default ResourceItem;
