import React from 'react';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Vue', level: 85 },
  { name: 'Angular', level: 80 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'PHP', level: 80 },
  { name: 'Ruby', level: 70 },
  { name: 'MySql', level: 85 },
  { name: 'Tailwind', level: 85 },
];

const otherTechnologies = [
  'RESTful API',
  'Rails',
  'Docker',
  'PostgreSQL',
  'Bootstrap',
  'Tailwind',
  'React Redux',
  'Zustand',
  'Pinia',
  'Figma',
  'Axios',
  'Git',
];

const Skills: React.FC = () => (
  <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 dark:text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">My Skills</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          I've worked with a variety of technologies in the web development world.
        </p>
      </div>

      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg h-full flex flex-col">
              <h3 className="text-xl font-semibold text-center mb-4 text-purple-600 dark:text-purple-400">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 h-3 rounded-full shadow-sm"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400 font-medium">{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-semibold mb-8 text-purple-600 dark:text-purple-400">
          Other Technologies I Work With
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {otherTechnologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md text-gray-800 dark:text-gray-200 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
