import React from 'react';
import GameHubImage from './assets/images/gamehub-project.gif';
import FujiSushiImage from './assets/images/fujisushi-project.gif';

function App() {
  const workItems = [
    {
      title: 'Game Hub',
      description:
        'Game Hub is a practice project focused on mastering React and TypeScript integration, along with modern web development tools.',
      tags: ['React', 'TypeScript', 'Chakra UI', 'Axios'],
      image: GameHubImage,
      github: 'https://github.com/William-WYL/game-hub',
      demo: 'https://game-hub-lilac-three-69.vercel.app/',
    },
    {
      title: 'Fuji Sushi',
      description:
        'Fuji Sushi is a practice project that serves as a responsive sushi restaurant website with essential features like interactive menus, form validation, and smooth UI animations.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      image: FujiSushiImage,
      github: 'https://github.com/William-WYL/JS-FujiShushi',
      demo: 'https://william-wyl.github.io/JS-FujiShushi/',
    },
  ];

  return (
    <>
      {/* 在 head 部分内联添加 Bootstrap CSS 和 JS CDN */}
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet" />
      </head>

      {/* 主体内容 */}
      <div className="container py-5">
        {/* Header */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-3 text-primary">Wei Wang</h1>
          <p className="lead text-muted mb-4">
            Full Stack Web Developer | Building digital experiences with React, TypeScript, and modern web technologies
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#work" className="btn btn-primary btn-lg px-4">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline-primary btn-lg px-4">
              Contact Me
            </a>
          </div>
        </header>

        {/* Basic Information */}
        <section className="card mb-5">
          <div className="card-body p-4">
            <h2 className="h1 fw-bold mb-4 border-bottom pb-2">About Me</h2>
            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="h3 mb-3">Personal Info</h3>
                <dl className="row">
                  <dt className="col-sm-4">Name:</dt>
                  <dd className="col-sm-8">Wei Wang</dd>

                  <dt className="col-sm-4">Email:</dt>
                  <dd className="col-sm-8">
                    <a href="mailto:wei.wang@example.com" className="text-decoration-none">
                      wei.wang@example.com
                    </a>
                  </dd>

                  <dt className="col-sm-4">Program:</dt>
                  <dd className="col-sm-8">Full Stack Web Development</dd>
                </dl>
              </div>
              <div className="col-md-6">
                <h3 className="h3 mb-3">Bio</h3>
                <p className="text-muted">
                  Passionate full-stack developer with expertise in modern JavaScript frameworks. I love building
                  responsive, accessible web applications with clean code and intuitive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mb-5">
          <h2 className="h1 fw-bold mb-4">Featured Projects</h2>
          <div className="row g-4">
            {workItems.map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h3 className="h4 card-title">{project.title}</h3>
                    <p className="card-text text-muted">{project.description}</p>
                    <div className="mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="badge bg-primary me-1 mb-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        <i className="bi bi-github me-1"></i> GitHub
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <i className="bi bi-eye me-1"></i> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="card mb-5">
          <div className="card-body p-4">
            <h2 className="h1 fw-bold mb-4">Skills & Expertise</h2>

            <div className="row">
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="h3 mb-4 d-flex align-items-center">
                  <i className="bi bi-code me-2 text-primary"></i>
                  Languages & Frameworks
                </h3>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>JavaScript/TypeScript</span>
                    <small className="text-muted">Expert</small>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>React</span>
                    <small className="text-muted">Advanced</small>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Node.js</span>
                    <small className="text-muted">Advanced</small>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <h3 className="h3 mb-4 d-flex align-items-center">
                  <i className="bi bi-tools me-2 text-primary"></i>
                  Tools & Technologies
                </h3>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Git</span>
                    <small className="text-muted">Expert</small>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Docker</span>
                    <small className="text-muted">Intermediate</small>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>AWS</span>
                    <small className="text-muted">Intermediate</small>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section id="resources" className="mb-5">
          <h2 className="h1 fw-bold mb-4">Learning Resources</h2>

          <div className="row g-4">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                      alt="React Documentation"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h3 className="h4 card-title">React Documentation</h3>
                      <p className="card-text text-muted mb-3">
                        The official React documentation is the best place to learn React from the ground up or dive
                        deeper into advanced concepts.
                      </p>
                      <a
                        href="https://reactjs.org/docs/getting-started.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit Resource <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="card shadow-sm">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
                      className="img-fluid rounded-start h-100 object-fit-cover"
                      alt="TypeScript Handbook"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h3 className="h4 card-title">TypeScript Handbook</h3>
                      <p className="card-text text-muted mb-3">
                        Comprehensive guide to TypeScript covering basic to advanced topics, perfect for JavaScript
                        developers looking to add type safety.
                      </p>
                      <a
                        href="https://www.typescriptlang.org/docs/handbook/intro.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Visit Resource <i className="bi bi-box-arrow-up-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="card bg-primary text-white mb-5">
          <div className="card-body p-5">
            <h2 className="h1 fw-bold mb-4">Get In Touch</h2>
            <p className="lead mb-5 opacity-75">
              Interested in working together or have questions about my work? Feel free to reach out!
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="mailto:wei.wang@example.com" className="btn btn-light btn-lg px-4">
                <i className="bi bi-envelope me-2"></i>
                Send Email
              </a>
              <a href="#" className="btn btn-outline-light btn-lg px-4">
                <i className="bi bi-calendar-event me-2"></i>
                Schedule Meeting
              </a>
            </div>
          </div>
        </section>

        <footer className="py-4 text-center text-muted border-top">
          <p className="mb-0">© {new Date().getFullYear()} Wei Wang. All rights reserved.</p>
        </footer>
      </div>

      {/* 在 body 底部内联添加 Bootstrap JS Bundle */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;
