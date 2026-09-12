import React from 'react';

export const Hero = ({ onOpenResume }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Large Rounded Rectangle Hero Glass Card */}
        <div className="single-hero-card">
          {/* Left Side: Top to Bottom Content */}
          <div className="hero-left-content">
            {/* 1. Small Muted Grey Label */}
            <span className="hero-label-muted">Hi, I am</span>

            {/* 2. Massive Bold White Headline */}
            <h1 className="hero-name-headline">Amar Kumar</h1>

            {/* 3. Location Label directly below Headline */}
            <p className="hero-location-muted">Bangalore, India</p>

            {/* 4. Solid White Pill Button opening in-site resume modal */}
            <div className="hero-cta-wrap">
              <button
                type="button"
                className="btn-solid-white-pill"
                onClick={onOpenResume}
              >
                View Resume &rarr;
              </button>
            </div>
          </div>

          {/* Right Side: Professional Portrait with Soft Blue Glow & Torso Transparency Fade */}
          <div className="hero-right-portrait">
            {/* Soft Blue Ambient Glow Behind His Head */}
            <div className="portrait-blue-ambient-glow"></div>

            <img
              src="/profile.png"
              alt="Amar Kumar"
              className="portrait-faded-torso"
            />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding-top: 7rem;
          padding-bottom: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0b0d12;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1240px;
          width: 100%;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }

        /* Large Rounded Rectangle Hero Card with Dark Glassmorphism Effect */
        .single-hero-card {
          position: relative;
          width: 100%;
          border-radius: 36px;
          background: linear-gradient(145deg, rgba(20, 26, 40, 0.65) 0%, rgba(10, 14, 24, 0.8) 100%);
          backdrop-filter: blur(36px) saturate(190%);
          -webkit-backdrop-filter: blur(36px) saturate(190%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 
            0 32px 80px -15px rgba(0, 0, 0, 0.8),
            0 8px 30px rgba(0, 0, 0, 0.4),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.18),
            inset 0 -1px 1px rgba(0, 0, 0, 0.2);
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          padding: 4.5rem 4rem 0 4rem;
          overflow: hidden;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .single-hero-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 40px 95px -15px rgba(0, 0, 0, 0.9),
            inset 0 1.5px 2.5px rgba(255, 255, 255, 0.28);
        }

        /* Left Side Content Styling */
        .hero-left-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-bottom: 4.5rem;
        }

        /* 1. Small Muted Grey Label */
        .hero-label-muted {
          font-family: var(--font-apple);
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          font-weight: 500;
          color: #94a3b8;
          letter-spacing: -0.015em;
          margin-bottom: 0.4rem;
          display: block;
        }

        /* 2. Massive Bold White Headline */
        .hero-name-headline {
          font-family: var(--font-apple);
          font-size: clamp(3.8rem, 7vw, 5.8rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.0;
          letter-spacing: -0.04em;
          margin-bottom: 0.65rem;
          text-transform: none;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }

        /* 3. Location Label Directly Below Headline */
        .hero-location-muted {
          font-family: var(--font-apple);
          font-size: clamp(1.1rem, 2.2vw, 1.35rem);
          font-weight: 400;
          color: #94a3b8;
          letter-spacing: -0.015em;
          line-height: 1.35;
          margin-bottom: 2.25rem;
        }

        /* 4. Solid White Pill Button */
        .hero-cta-wrap {
          margin-bottom: 0;
        }

        .btn-solid-white-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #0f172a;
          padding: 0.95rem 2.4rem;
          border-radius: 9999px;
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: -0.015em;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 28px rgba(255, 255, 255, 0.22);
          text-decoration: none;
          border: none;
          cursor: pointer;
        }

        .btn-solid-white-pill:hover {
          background: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(255, 255, 255, 0.35);
        }

        /* Right Side: Portrait with Soft Blue Ambient Glow Behind Head */
        .hero-right-portrait {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 100%;
        }

        /* Soft Blue Ambient Glow Behind Head */
        .portrait-blue-ambient-glow {
          position: absolute;
          top: 22%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.42) 0%, rgba(37, 99, 235, 0.18) 55%, transparent 75%);
          border-radius: 50%;
          filter: blur(52px);
          z-index: 1;
          pointer-events: none;
        }

        .portrait-faded-torso {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          height: auto;
          max-height: 65vh;
          object-fit: contain;
          object-position: bottom;
          display: block;
          /* Smooth Fade to Transparency Effect on lower torso */
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.2) 88%, rgba(0, 0, 0, 0) 98%);
          -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0.6) 65%, rgba(0, 0, 0, 0.2) 88%, rgba(0, 0, 0, 0) 98%);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero-right-portrait:hover .portrait-faded-torso {
          transform: translateY(-4px) scale(1.01);
        }

        @media (max-width: 992px) {
          .single-hero-card {
            grid-template-columns: 1fr;
            padding: 3rem 2rem 0 2rem;
            text-align: center;
          }
          .hero-left-content {
            align-items: center;
            padding-bottom: 2.5rem;
          }
          .portrait-faded-torso {
            max-width: 360px;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 5.5rem;
          }
          .single-hero-card {
            border-radius: 24px;
            padding: 2.25rem 1.25rem 0 1.25rem;
          }
          .hero-name-headline {
            font-size: 3.25rem;
            margin-bottom: 0.5rem;
          }
          .hero-location-muted {
            font-size: 1rem;
            margin-bottom: 1.75rem;
          }
          .hero-cta-wrap {
            width: 100%;
          }
          .btn-solid-white-pill {
            width: 100%;
            justify-content: center;
          }
          .portrait-faded-torso {
            max-width: 290px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
