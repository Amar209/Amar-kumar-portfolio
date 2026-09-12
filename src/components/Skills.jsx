import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="section-padding">
      <div className="section-header">
        <div className="section-subtitle">
          <span className="starburst">✴</span>
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h2 className="section-title">
          SKILLS, FRAMEWORKS & DEVELOPMENT TOOLS
        </h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category-card">
            <h3 className="category-header">
              <span className="starburst">✴</span>
              <span>{category.name}</span>
            </h3>

            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .skill-category-card {
          background-color: var(--bg-surface);
          border: 2px solid var(--border-light);
          padding: 2.25rem;
          border-radius: var(--radius-md);
          transition: var(--transition);
        }

        .skill-category-card:hover {
          border-color: var(--text-primary);
          box-shadow: var(--shadow-md);
        }

        .category-header {
          font-size: 1.15rem;
          margin-bottom: 1.75rem;
          padding-bottom: 0.85rem;
          border-bottom: 2px solid var(--border-light);
          display: flex;
          align-items: center;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }

        .skill-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .skill-pct {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-red);
          font-weight: 800;
        }

        .skill-bar-bg {
          height: 6px;
          background-color: var(--bg-primary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #111111, var(--accent-red));
          border-radius: var(--radius-full);
          transition: width 1s ease-out;
        }

        [data-theme='dark'] .skill-bar-fill {
          background: linear-gradient(90deg, #ffffff, var(--accent-red));
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
