import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from './Icons';

export const Footer = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '918904328995';
  const githubUrl = import.meta.env.VITE_GITHUB_URL || 'https://github.com/Amar209';
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/amar-kumar-522591258/';
  const emailAddress = import.meta.env.VITE_CONTACT_EMAIL || 'workwithamarkumar@gmail.com';

  return (
    <footer id="contact" className="footer-dark-section">
      <div className="footer-dark-container">
        {/* Top Center Hero CTA */}
        <div className="footer-dark-content">
          <h2 className="footer-dark-title">
            Let's turn ideas into shipped products.
          </h2>

          {/* Large solid white pill-shaped button redirecting to WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta-btn"
          >
            <WhatsappIcon size={20} color="#090d16" />
            <span>Let's Chat</span>
          </a>

          {/* Horizontal row of small muted grey text links separated by thin vertical dividers */}
          <div className="footer-links-row">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <GithubIcon size={18} color="currentColor" />
              <span>GitHub</span>
            </a>
            <span className="footer-link-divider">|</span>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <LinkedinIcon size={18} color="currentColor" />
              <span>LinkedIn</span>
            </a>
            <span className="footer-link-divider">|</span>
            <a
              href={`mailto:${emailAddress}`}
              className="footer-social-link"
            >
              <MailIcon size={18} color="currentColor" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Thin horizontal dividing line in dark grey */}
        <div className="footer-divider-line" />

        {/* Small muted grey copyright text centered */}
        <div className="footer-copyright">
          <p>© 2026 Amar Kumar. Built with React & Coffee.</p>
        </div>
      </div>

      <style>{`
        .footer-dark-section {
          position: relative;
          background-color: #0b0f17;
          color: #ffffff;
          padding: 7rem 1.5rem 3rem;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-dark-container {
          max-width: 1240px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .footer-dark-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 850px;
          margin-bottom: 5.5rem;
        }

        /* Large bold white headline */
        .footer-dark-title {
          font-family: var(--font-apple);
          font-weight: 800;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          color: #ffffff;
          letter-spacing: -0.035em;
          line-height: 1.15;
          margin-bottom: 2.75rem;
          text-align: center;
        }

        /* Smaller muted grey subtitle */
        .footer-dark-subtitle {
          font-family: var(--font-apple);
          font-weight: 400;
          font-size: clamp(1.05rem, 2vw, 1.25rem);
          color: #94a3b8;
          letter-spacing: -0.01em;
          margin-bottom: 2.75rem;
          text-align: center;
        }

        /* Large solid white pill-shaped button with black bold text */
        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          background-color: #ffffff;
          color: #090d16;
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 1.1rem;
          padding: 1.05rem 2.6rem;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(255, 255, 255, 0.12);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 3.5rem;
        }

        .footer-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px -4px rgba(255, 255, 255, 0.28);
          background-color: #ffffff;
        }

        /* Horizontal row of small muted grey text links separated by thin vertical dividers */
        .footer-links-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
        }

        .footer-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-apple);
          font-weight: 500;
          font-size: 0.95rem;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .footer-social-link:hover {
          color: #ffffff;
        }

        .footer-link-divider {
          color: #334155;
          font-weight: 300;
          font-size: 0.85rem;
          user-select: none;
        }

        /* Thin horizontal dividing line in dark grey */
        .footer-divider-line {
          width: 100%;
          height: 1px;
          background-color: #1e293b;
          margin-bottom: 2rem;
        }

        /* Small muted grey copyright text centered */
        .footer-copyright {
          font-family: var(--font-apple);
          font-weight: 400;
          font-size: 0.875rem;
          color: #64748b;
          text-align: center;
        }

        @media (max-width: 640px) {
          .footer-dark-section {
            padding: 5rem 1.25rem 2.5rem;
          }
          .footer-dark-content {
            margin-bottom: 4rem;
          }
          .footer-cta-btn {
            padding: 0.9rem 2.2rem;
            font-size: 1rem;
            margin-bottom: 2.75rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
