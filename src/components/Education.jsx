import React from 'react';

const educationData = [
  {
    id: 1,
    institution: 'Presidency University, Bangalore',
    degree: 'B.Tech in Computer Science and Engineering',
    date: '2022 – 2026',
    score: 'CGPA: 7.10',
  },
  {
    id: 2,
    institution: 'Presidency Pre-University, Bangalore',
    degree: 'Science Stream (PCMB)',
    date: '2020 – 2022',
    score: 'Score: 62%',
  },
  {
    id: 3,
    institution: 'Pavithra Vidhyanikethana English High School',
    degree: 'Class 10th — Karnataka Secondary Board of Examination',
    date: '2019 – 2020',
    score: 'Score: 81.76%',
  },
];

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        {/* Header Aligned to Left */}
        <div className="education-header">
          <h2 className="education-title">Education</h2>
          <p className="education-subtitle">My academic journey</p>
        </div>

        {/* Vertical Timeline */}
        <div className="education-timeline">
          {educationData.map((item) => (
            <div key={item.id} className="timeline-item">
              {/* Column 1: Date Label (Years Only) on Left */}
              <div className="timeline-date-wrap">
                <span className="timeline-date">{item.date}</span>
              </div>

              {/* Column 2: Glowing White Dot in Center */}
              <div className="timeline-dot"></div>

              {/* Column 3: Dark Glassmorphism Card on Right */}
              <div className="timeline-card-wrap">
                <div className="timeline-glass-card">
                  <div className="timeline-card-header">
                    <h3 className="institution-name">{item.institution}</h3>
                    <span className="score-glass-badge">{item.score}</span>
                  </div>
                  <p className="degree-title">{item.degree}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .education-section {
          position: relative;
          padding: 6rem 1.5rem;
          background-color: #0b0d12;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .education-container {
          max-width: 1240px;
          width: 100%;
        }

        /* Header Aligned Left */
        .education-header {
          text-align: left;
          margin-bottom: 4.5rem;
        }

        .education-title {
          font-family: var(--font-apple);
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          color: #ffffff;
          letter-spacing: -0.035em;
          margin-bottom: 0.5rem;
          line-height: 1.05;
        }

        .education-subtitle {
          font-family: var(--font-apple);
          font-weight: 500;
          font-size: 1.15rem;
          color: #94a3b8;
          letter-spacing: -0.01em;
        }

        /* Vertical Timeline with 3-Column Grid */
        .education-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        /* Thin vertical line running down the timeline */
        .education-timeline::before {
          content: '';
          position: absolute;
          top: 1rem;
          bottom: 1rem;
          left: 179px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.12) 50%,
            rgba(255, 255, 255, 0.25) 100%
          );
          z-index: 1;
        }

        .timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 140px 30px 1fr;
          align-items: center;
          gap: 1.5rem;
          z-index: 2;
        }

        /* Date Label on Left Column (Years Only) */
        .timeline-date-wrap {
          text-align: right;
        }

        .timeline-date {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.95rem;
          color: #94a3b8;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        /* Glowing White Dot in Center Column */
        .timeline-dot {
          justify-self: center;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 
            0 0 14px rgba(255, 255, 255, 0.9),
            0 0 28px rgba(255, 255, 255, 0.4);
          z-index: 3;
        }

        /* Glassmorphism Card on Right Column */
        .timeline-card-wrap {
          width: 100%;
        }

        .timeline-glass-card {
          background: linear-gradient(145deg, rgba(20, 26, 40, 0.65) 0%, rgba(10, 14, 24, 0.8) 100%);
          backdrop-filter: blur(28px) saturate(190%);
          -webkit-backdrop-filter: blur(28px) saturate(190%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 1.85rem 2.25rem;
          box-shadow: 
            0 20px 50px -10px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.18);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .timeline-glass-card:hover {
          transform: translateX(4px);
          border-color: rgba(255, 255, 255, 0.24);
          box-shadow: 
            0 28px 60px -10px rgba(0, 0, 0, 0.75),
            inset 0 1.5px 2.5px rgba(255, 255, 255, 0.28);
        }

        .timeline-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
        }

        .institution-name {
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 1.35rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        /* Pill-Shaped Glass Badge */
        .score-glass-badge {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.825rem;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          white-space: nowrap;
        }

        .degree-title {
          font-family: var(--font-apple);
          font-weight: 400;
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .education-timeline::before {
            left: 15px;
          }
          .timeline-item {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            padding-left: 2.5rem;
          }
          .timeline-date-wrap {
            text-align: left;
          }
          .timeline-dot {
            position: absolute;
            left: 9px;
            top: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
