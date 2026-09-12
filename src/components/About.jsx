import React from 'react';
import { Layers, Video, BrainCircuit, Terminal } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: <Video size={24} color="#ff3b00" />,
      title: "REAL-TIME WEBRTC & WEBSOCKETS",
      desc: "Architected SFU-based video conferencing signaling with zero noticeable latency for virtual classroom platforms at Irasoft System."
    },
    {
      icon: <Layers size={24} color="#ff3b00" />,
      title: "FULL-STACK MERN ARCHITECTURE",
      desc: "Built scalable RESTful APIs, MongoDB schemas, and responsive React UIs for production order tracking and learning software."
    },
    {
      icon: <BrainCircuit size={24} color="#ff3b00" />,
      title: "GENERATIVE AI & ML PIPELINES",
      desc: "Engineered meteorological data predictive risk models at Infosys Springboard and deployed predictions behind high-throughput Flask APIs."
    },
    {
      icon: <Terminal size={24} color="#ff3b00" />,
      title: "DESKTOP AI & ELECTRON IPC",
      desc: "Created ARC AI - a local desktop AI running Llama 3.1 LLM with continuous voice wake-word triggers and OCR code error detection."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="section-header">
        <div className="section-subtitle">
          <span className="starburst">✴</span>
          <span>ABOUT THE ENGINEER</span>
        </div>
        <h2 className="section-title">
          SCALABLE CODE, REAL-TIME ARCHITECTURE & PRACTICAL AI SOLUTIONS
        </h2>
      </div>

      <div className="about-grid">
        {/* Bio Text Column */}
        <div className="about-bio-card">
          <h3 className="bio-heading">
            PASSIONATE ABOUT SOLVING COMPLEX SOFTWARE CHALLENGES
          </h3>

          <p className="bio-paragraph">
            I am a Computer Science Engineering student at <strong>Presidency University</strong> (graduating 2026) with hands-on software developer internship experience at <strong>Irasoft System</strong> and <strong>Infosys Springboard</strong>.
          </p>

          <p className="bio-paragraph">
            Whether it's getting WebRTC SFU video signaling working seamlessly across low-bandwidth connections, deploying machine learning inference services, or crafting native desktop AI tools that listen to voice commands and monitor build logs—I thrive at the intersection of performance, clean code, and user impact.
          </p>

          <div className="bio-tagline">
            <span className="starburst">✴</span>
            <span>ALWAYS BUILDING. ALWAYS LEARNING. READY TO CONTRIBUTE FROM DAY ONE.</span>
          </div>
        </div>

        {/* Competency Cards Grid */}
        <div className="about-cards-grid">
          {highlights.map((item, idx) => (
            <div key={idx} className="competency-card">
              <div className="card-icon-wrapper">{item.icon}</div>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        .about-bio-card {
          background-color: var(--bg-surface);
          border: 2px solid var(--border-light);
          padding: 2.5rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .bio-heading {
          font-size: 1.35rem;
          line-height: 1.3;
          margin-bottom: 1.25rem;
          color: var(--text-primary);
        }

        .bio-paragraph {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }

        .bio-tagline {
          margin-top: 1.5rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
          font-family: var(--font-mono);
          font-size: 0.825rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          display: flex;
          align-items: center;
        }

        .about-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .competency-card {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 1.5rem;
          border-radius: var(--radius-sm);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .competency-card:hover {
          border-color: var(--accent-red);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .card-icon-wrapper {
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 0.95rem;
          line-height: 1.3;
          margin-bottom: 0.6rem;
          font-weight: 800;
        }

        .card-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
