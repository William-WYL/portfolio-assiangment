// src/App.tsx
import React from 'react';

function App() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <header style={{ marginBottom: '2rem' }}>
        <h1>My Portfolio</h1>
        <p>Welcome! Here you'll find my course work, skills, and resources from my program.</p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Basic Information</h2>
        <p>Name: [Your Name]</p>
        <p>Email: [Your Email]</p>
        <p>Program: [Your Program]</p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Work</h2>
        {/* Example Work Item */}
        <div>
          <h3>Project Title</h3>
          <p>Description of the project.</p>
          <img src="[Image URL]" alt="Project" style={{ maxWidth: '100%' }} />
          <p>
            <a href="[Project Link]">View Project</a>
          </p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Docker</li>
          </ul>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Skills</h2>
        <p>Description of your skills and experience.</p>
        <h4>Languages/Frameworks</h4>
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
        </ul>
        <h4>Tools</h4>
        <ul>
          <li>Git</li>
          <li>Docker</li>
          <li>VS Code</li>
        </ul>
      </section>

      <section>
        <h2>Resources</h2>
        {/* Example Resource Item */}
        <div>
          <h3>Resource Title</h3>
          <img src="[Resource Image URL]" alt="Resource" style={{ maxWidth: '100px' }} />
          <p>Summary of the resource.</p>
          <p>
            <a href="[Resource Link]">Visit Resource</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
