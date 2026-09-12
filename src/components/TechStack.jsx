import React from 'react';

export const TechStack = () => {
  return (
    <section id="tech-stack" className="scattered-techstack-section">
      <div className="scattered-techstack-container">
        {/* Header Aligned to Left */}
        <div className="scattered-techstack-header">
          <h2 className="scattered-techstack-title">Tech Stack</h2>
          <p className="scattered-techstack-subtitle">Tools I work with</p>
        </div>

        {/* Loose Scattered 3D Stickers Canvas */}
        <div className="scattered-canvas-wrapper">
          {/* Subtle Soft Ambient Glows (Pastel Blue, Violet, Orange) */}
          <div className="scattered-glow glow-blue"></div>
          <div className="scattered-glow glow-violet"></div>
          <div className="scattered-glow glow-orange"></div>

          {/* Floating 3D Render Image (No background box, floating directly on dark charcoal) */}
          <div className="scattered-render-box">
            <img
              src="/3d_scattered_stickers.png"
              alt="Floating 3D Technology Stickers"
              className="scattered-3d-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .scattered-techstack-section {
          position: relative;
          padding: 6rem 1.5rem 8rem 1.5rem;
          background-color: #0b0d12;
          display: flex;
          justify-content: center;
          width: 100%;
          overflow: hidden;
        }

        .scattered-techstack-container {
          max-width: 1240px;
          width: 100%;
          position: relative;
          z-index: 2;
        }

        /* Header Aligned Left */
        .scattered-techstack-header {
          text-align: left;
          margin-bottom: 3.5rem;
        }

        .scattered-techstack-title {
          font-family: var(--font-apple);
          font-weight: 800;
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          color: #ffffff;
          letter-spacing: -0.035em;
          margin-bottom: 0.5rem;
          line-height: 1.05;
        }

        .scattered-techstack-subtitle {
          font-family: var(--font-apple);
          font-weight: 500;
          font-size: 1.15rem;
          color: #94a3b8;
          letter-spacing: -0.01em;
        }

        /* Canvas Wrapper */
        .scattered-canvas-wrapper {
          position: relative;
          width: 100%;
          min-height: 540px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Soft Ambient Glows */
        .scattered-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(85px);
          pointer-events: none;
          z-index: 1;
        }

        .glow-blue {
          width: 420px;
          height: 320px;
          top: 30%;
          left: 20%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, transparent 70%);
        }

        .glow-violet {
          width: 440px;
          height: 340px;
          top: 50%;
          right: 18%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 70%);
        }

        .glow-orange {
          width: 380px;
          height: 300px;
          bottom: 15%;
          left: 45%;
          background: radial-gradient(circle, rgba(251, 146, 60, 0.18) 0%, transparent 70%);
        }

        /* 3D Render Box floating directly on dark charcoal */
        .scattered-render-box {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1080px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .scattered-3d-img {
          width: 100%;
          height: auto;
          max-height: 600px;
          object-fit: contain;
          border-radius: 32px;
          filter: drop-shadow(0 20px 35px rgba(0, 0, 0, 0.65));
          animation: floatDrift 7s ease-in-out infinite alternate;
          transition: transform 0.5s ease;
        }

        .scattered-render-box:hover .scattered-3d-img {
          transform: scale(1.02) translateY(-6px);
        }

        @keyframes floatDrift {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(0.4deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @media (max-width: 768px) {
          .scattered-canvas-wrapper {
            min-height: 380px;
          }
          .scattered-3d-img {
            max-height: 380px;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
