import React from 'react';

const projectsData = [
  {
    id: 'ai-assistant',
    title: 'ARC AI Assistant',
    description: 'Intelligent conversational AI platform with real-time code generation & contextual memory.',
    image: '/arc_ai_assistant.png',
    tags: ['React', 'Node.js', 'OpenAI API', 'Tailwind'],
    projectUrl: 'https://github.com/Amar209/ai-assistant',
  },
  {
    id: 'fake-account-detection',
    title: 'Fake Account Detection',
    description: 'Machine learning threat intelligence system to detect and flag automated bot profiles.',
    image: '/fake_account_detection_diagram.png',
    tags: ['Python', 'Scikit-Learn', 'Node.js', 'MongoDB'],
    projectUrl: 'https://github.com/Amar209/fake-account-detection',
  },
  {
    id: 'gurukul',
    title: 'Gurukul',
    description: 'Online tuition class education platform featuring live video classes and real-time teacher-student sync.',
    image: '/gurukul.png',
    tags: ['Flutter', 'Dart', 'WebRTC', 'Firebase'],
    projectUrl: 'https://github.com/Amar209/gurukul',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects-light-section">
      <div className="projects-light-container">
        {/* Header Aligned to Left */}
        <div className="projects-light-header">
          <h2 className="projects-light-title">Featured Projects</h2>
          <p className="projects-light-subtitle">A selection of things I've built</p>
        </div>

        {/* 3-Column Single Row Grid */}
        <div className="projects-light-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-light-card">
              {/* Large Screenshot */}
              <div className="project-light-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-light-image"
                />
              </div>

              {/* Card Content */}
              <div className="project-light-card-body">
                <h3 className="project-light-card-title">{project.title}</h3>
                <p className="project-light-card-desc">{project.description}</p>

                {/* Tech Tags */}
                <div className="project-light-tags-row">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-light-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Single View Project Button */}
                <div className="project-light-buttons-row">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-light-solid-black"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-light-section {
          position: relative;
          padding: 6rem 1.5rem;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .projects-light-container {
          max-width: 1240px;
          width: 100%;
        }

        /* Header Aligned Left */
        .projects-light-header {
          text-align: left;
          margin-bottom: 3.5rem;
        }

        .projects-light-title {
          font-family: var(--font-apple);
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          color: #0f172a;
          letter-spacing: -0.035em;
          margin-bottom: 0.5rem;
          line-height: 1.05;
        }

        .projects-light-subtitle {
          font-family: var(--font-apple);
          font-weight: 500;
          font-size: 1.15rem;
          color: #64748b;
          letter-spacing: -0.01em;
        }

        /* Single Row 3-Column Grid */
        .projects-light-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          width: 100%;
        }

        /* Project Card with Soft Light Grey Background & Drop Shadow */
        .project-light-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          box-shadow: 
            0 10px 30px -5px rgba(15, 23, 42, 0.05),
            0 4px 12px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-light-card:hover {
          transform: translateY(-6px);
          box-shadow: 
            0 20px 40px -10px rgba(15, 23, 42, 0.12),
            0 8px 16px rgba(15, 23, 42, 0.06);
          border-color: #cbd5e1;
        }

        /* Large Screenshot */
        .project-light-image-wrap {
          width: 100%;
          aspect-ratio: 16 / 9.5;
          overflow: hidden;
          background: #f1f5f9;
          border-bottom: 1px solid #e2e8f0;
        }

        .project-light-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-light-card:hover .project-light-image {
          transform: scale(1.04);
        }

        /* Card Body */
        .project-light-card-body {
          padding: 1.75rem 1.6rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .project-light-card-title {
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 1.35rem;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
        }

        .project-light-card-desc {
          font-family: var(--font-apple);
          font-weight: 400;
          font-size: 0.925rem;
          color: #64748b;
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        /* Tech Tags */
        .project-light-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-bottom: 1.5rem;
        }

        .tech-light-tag-pill {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.75rem;
          color: #334155;
          background-color: #e2e8f0;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
        }

        /* Buttons Row */
        .project-light-buttons-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-light-solid-black {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          color: #ffffff;
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);
          border: 1px solid #0f172a;
        }

        .btn-light-solid-black:hover {
          background: #000000;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
        }

        .btn-light-outlined-black {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: #0f172a;
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.85rem;
          padding: 0.6rem 1.2rem;
          border-radius: 9999px;
          border: 1px solid #cbd5e1;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-light-outlined-black:hover {
          background: #f1f5f9;
          border-color: #94a3b8;
          color: #000000;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .projects-light-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .projects-light-section {
            padding: 4rem 1.25rem;
          }
          .projects-light-grid {
            grid-template-columns: 1fr;
          }
          .project-light-card {
            border-radius: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
