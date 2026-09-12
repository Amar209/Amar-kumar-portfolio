import React from 'react';

export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <header className="glass-navbar">
        <div className="nav-container">
          {/* FAR LEFT: Single 'Home' Link */}
          <nav className="nav-left-menu">
            <a href="#" className="nav-link-muted-grey">
              Home
            </a>
          </nav>

          {/* FAR RIGHT: Solid Black Pill-Shaped Button reading "Contact" with Bold White Text */}
          <div className="nav-right-button-wrap">
            <a href="#contact" className="btn-solid-black-talk-pill">
              Contact
            </a>
          </div>
        </div>
      </header>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 1.5rem;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 0 1.5rem;
          pointer-events: none;
        }

        /* Solid Off-White Frosted Glassmorphism with Very Thin Dark Border */
        .glass-navbar {
          pointer-events: auto;
          width: 100%;
          max-width: 960px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(246, 246, 248, 0.84) 100%);
          backdrop-filter: blur(28px) saturate(210%);
          -webkit-backdrop-filter: blur(28px) saturate(210%);
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 9999px;
          box-shadow: 
            0 16px 40px -8px rgba(0, 0, 0, 0.4),
            0 4px 14px rgba(0, 0, 0, 0.15),
            inset 0 1.5px 2px rgba(255, 255, 255, 1);
          transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-navbar:hover {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 252, 0.9) 100%);
          border-color: rgba(15, 23, 42, 0.18);
          box-shadow: 
            0 20px 48px -6px rgba(0, 0, 0, 0.5),
            inset 0 1.5px 2.5px rgba(255, 255, 255, 1);
        }

        .nav-container {
          padding: 0.45rem 0.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* FAR LEFT: Four Muted Dark Grey Text Links */
        .nav-left-menu {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .nav-link-muted-grey {
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.9rem;
          color: #475569;
          text-decoration: none;
          padding: 0.45rem 1.1rem;
          border-radius: 9999px;
          transition: all 0.2s ease;
        }

        .nav-link-muted-grey:hover {
          color: #0f172a;
          background: rgba(15, 23, 42, 0.06);
        }

        /* FAR RIGHT: Solid Black Pill-Shaped Button ("Let's Talk") */
        .nav-right-button-wrap {
          display: flex;
          align-items: center;
        }

        .btn-solid-black-talk-pill {
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 0.9rem;
          color: #ffffff;
          background: #0f172a;
          padding: 0.55rem 1.45rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid #0f172a;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.35);
        }

        .btn-solid-black-talk-pill:hover {
          background: #000000;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
        }

        @media (max-width: 768px) {
          .navbar-wrapper {
            top: 1rem;
            padding: 0 0.75rem;
          }
          .nav-container {
            padding: 0.4rem 0.5rem;
          }
          .nav-link-muted-grey {
            padding: 0.35rem 0.65rem;
            font-size: 0.825rem;
          }
          .btn-solid-black-talk-pill {
            padding: 0.45rem 1rem;
            font-size: 0.825rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
