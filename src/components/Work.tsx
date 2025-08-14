import React from 'react';
import WorkItem from './WorkItem';

const workData = [
  {
    title: 'Project Title',
    description: 'Project description goes here.',
    image: '',
    link: '',
    techList: ['React', 'TypeScript'],
  },
  // Add more work items as needed
];

const Work: React.FC = () => (
  <section>
    <h2>Work</h2>
    {workData.map((item, idx) => (
      <WorkItem key={idx} {...item} />
    ))}
  </section>
);

export default Work;
