import React from 'react';

const experienceData = [
  {
    id: 'irasoft-intern',
    role: 'Software Developer Intern',
    company: 'Irasoft Systems',
    period: 'Jun 2026 – Aug 2026',
    description: 'Built high-performance REST APIs and migrated core microservices for an e-commerce platform deployed to production.',
    tags: ['Express.js', 'MongoDB', 'REST API'],
  },
  {
    id: 'infosys-intern',
    role: 'Generative AI Intern',
    company: 'Infosys Springboard',
    period: 'Nov 2025 – Jan 2026',
    description: 'Architected machine learning models for predictive weather forecasting and deployed scalable inference microservices using FastAPI.',
    tags: ['Python', 'scikit-learn', 'FastAPI', 'Pandas'],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="experience-light-section">
      <div className="experience-light-container">
        {/* Header Aligned to Left */}
        <div className="experience-light-header">
          <h2 className="experience-light-title">Experience</h2>
          <p className="experience-light-subtitle">Where I've worked</p>
        </div>

        {/* Grid of Two Internship Cards in a Single Row */}
        <div className="experience-light-grid">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-light-card">
              {/* Top: Small Muted Grey Date Badge */}
              <div className="exp-light-card-top">
                <span className="exp-light-date-badge">{exp.period}</span>
              </div>

              {/* Title & Company */}
              <h3 className="exp-light-role-title">{exp.role}</h3>
              <p className="exp-light-company-name">{exp.company}</p>

              {/* Description */}
              <p className="exp-light-description">{exp.description}</p>

              {/* Light Tech Tags */}
              <div className="exp-light-tags-row">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="exp-light-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-light-section {
          position: relative;
          padding: 6rem 1.5rem;
          background-color: #ffffff;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .experience-light-container {
          max-width: 1240px;
          width: 100%;
        }

        /* Header Aligned Left */
        .experience-light-header {
          text-align: left;
          margin-bottom: 4rem;
        }

        .experience-light-title {
          font-family: var(--font-apple);
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          color: #0f172a;
          letter-spacing: -0.035em;
          margin-bottom: 0.5rem;
          line-height: 1.05;
        }

        .experience-light-subtitle {
          font-family: var(--font-apple);
          font-weight: 500;
          font-size: 1.15rem;
          color: #64748b;
          letter-spacing: -0.01em;
        }

        /* Grid of two internship cards arranged in a single row */
        .experience-light-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
          width: 100%;
        }

        /* Light Grey Background Card with Subtle Drop Shadow */
        .experience-light-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 2.25rem;
          box-shadow: 
            0 10px 30px -5px rgba(15, 23, 42, 0.05),
            0 4px 12px rgba(15, 23, 42, 0.03);
          display: flex;
          flex-direction: column;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .experience-light-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 20px 40px -10px rgba(15, 23, 42, 0.12),
            0 8px 16px rgba(15, 23, 42, 0.06);
          border-color: #cbd5e1;
        }

        .exp-light-card-top {
          margin-bottom: 1.25rem;
        }

        /* Small Muted Grey Date Range Badge */
        .exp-light-date-badge {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.825rem;
          color: #475569;
          background-color: #e2e8f0;
          padding: 0.325rem 0.8rem;
          border-radius: 9999px;
        }

        /* Bold Black Role Title */
        .exp-light-role-title {
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 1.45rem;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin-bottom: 0.3rem;
        }

        /* Muted Grey Company Name */
        .exp-light-company-name {
          font-family: var(--font-apple);
          font-weight: 500;
          font-size: 1.05rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        /* Short Two-Line Description */
        .exp-light-description {
          font-family: var(--font-apple);
          font-weight: 400;
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.55;
          margin-bottom: 1.75rem;
          flex: 1;
        }

        /* Horizontal Row of Small Pill-Shaped Light Grey Tech Tags */
        .exp-light-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .exp-light-tag {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.75rem;
          color: #334155;
          background-color: #e2e8f0;
          padding: 0.28rem 0.7rem;
          border-radius: 9999px;
        }

        @media (max-width: 868px) {
          .experience-light-grid {
            grid-template-columns: 1fr;
          }
          .experience-light-card {
            border-radius: 20px;
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
