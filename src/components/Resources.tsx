import React from 'react';
import ResourceItem from './ResourceItem';

const resourcesData = [
  {
    title: 'Resource Title',
    image: '',
    summary: 'Resource summary goes here.',
    link: '',
  },
  // Add more resources as needed
];

const Resources: React.FC = () => (
  <section>
    <h2>Resources</h2>
    {resourcesData.map((item, idx) => (
      <ResourceItem key={idx} {...item} />
    ))}
  </section>
);

export default Resources;
