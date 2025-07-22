 import React from 'react';

const projects = [
  {
    id: 1,
    title: 'website Design and Developed ',
    description: ' ',
    imageUrl: 'project1.jpeg',
    demoLink: 'https://imgur.com/a/sMS1j7S',
    repoLink: 'https://github.com/kingscode-big/project-one',
  },
  {
    id: 2,
    title: 'website Design and Developed',
    description: '',
    imageUrl: 'chimgo.png',
    demoLink: 'https://imgur.com/a/zMOL1Om',
    repoLink: 'https://github.com/kingscode-big/project-two',
  },
  {
    id: 3,
    title: 'website Design and Developed',
    description: '.',
    imageUrl: 'project2.jpeg',
    demoLink: 'https://example.com/demo3',
    repoLink: 'https://github.com/yourusername/project-three',
  },
];

export default function Project() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100px',
          backgroundColor: '#052543',
        }}
      ></div>

      <section id="projects" className="projects-section">
        <h2 className="project-text-header">MY WORK</h2>
        <h2 className="section-title" style={{ color: 'white', textAlign: 'start' }}>
          Recent Projects
        </h2>

        <div className="projects-grid">
          {projects.map(({ id, title, description, imageUrl, demoLink, repoLink }) => (
            <div key={id} className="project-card">
              <img
                style={{ height: '35rem' }}
                src={imageUrl}
                alt={`${title} screenshot`}
                className="project-image"
              />
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <div className="project-links">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
