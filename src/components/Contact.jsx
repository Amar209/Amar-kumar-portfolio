import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const Contact = ({ onShowToast }) => {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Message sent! I will respond within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-header">
        <div className="section-subtitle">
          <span className="starburst">✴</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="section-title">
          LET'S BUILD SOMETHING EXTRAORDINARY TOGETHER
        </h2>
      </div>

      <div className="contact-grid">
        {/* Left Info Column */}
        <div className="contact-info-col">
          <div className="info-card email-highlight-card">
            <div className="card-label">DIRECT EMAIL</div>
            <div className="email-address">{personalInfo.email}</div>

            <button onClick={handleCopyEmail} className="btn-copy">
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
              <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}</span>
            </button>
          </div>

          <div className="info-cards-subgrid">
            <div className="info-card">
              <div className="info-icon">
                <Phone size={20} color="#ff3b00" />
              </div>
              <div className="info-detail">
                <div className="detail-label">PHONE</div>
                <div className="detail-val">{personalInfo.phone}</div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <MapPin size={20} color="#ff3b00" />
              </div>
              <div className="info-detail">
                <div className="detail-label">LOCATION</div>
                <div className="detail-val">{personalInfo.location}</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-links-box">
            <div className="social-label">CONNECT ON SOCIAL CHANNELS</div>
            <div className="social-pills">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <GithubIcon size={18} />
                <span>GITHUB</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
              >
                <LinkedinIcon size={18} />
                <span>LINKEDIN</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="contact-form-col">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">YOUR NAME</label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">YOUR EMAIL</label>
              <input
                type="email"
                required
                placeholder="john@company.com"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">SUBJECT</label>
              <input
                type="text"
                required
                placeholder="Job Opportunity / Project Collaboration"
                className="form-input"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">MESSAGE</label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about the role, project scope, or opportunity..."
                className="form-textarea"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary form-submit-btn">
              <Send size={18} />
              <span>{submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .info-card {
          background-color: var(--bg-surface);
          border: 2px solid var(--border-light);
          padding: 1.75rem;
          border-radius: var(--radius-md);
        }

        .email-highlight-card {
          border-color: var(--text-primary);
          background-color: #111111;
          color: #ffffff;
        }

        .card-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--accent-red);
          margin-bottom: 0.5rem;
        }

        .email-address {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.3rem;
          word-break: break-all;
          margin-bottom: 1.25rem;
        }

        .btn-copy {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: #ffffff;
          color: #111111;
          padding: 0.65rem 1.25rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          transition: var(--transition);
        }

        .btn-copy:hover {
          background-color: var(--accent-red);
          color: #ffffff;
        }

        .info-cards-subgrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .info-icon {
          margin-bottom: 0.75rem;
        }

        .detail-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .detail-val {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .social-links-box {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
        }

        .social-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .social-pills {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 0.82rem;
          color: var(--text-primary);
          transition: var(--transition);
        }

        .social-pill:hover {
          background-color: var(--text-primary);
          color: var(--bg-primary);
          border-color: var(--text-primary);
        }

        /* Contact Form */
        .contact-form-col {
          background-color: var(--bg-surface);
          border: 2px solid var(--border-light);
          padding: 2.25rem;
          border-radius: var(--radius-md);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .form-input, .form-textarea {
          font-family: var(--font-body);
          font-size: 0.95rem;
          padding: 0.85rem 1rem;
          background-color: var(--bg-primary);
          border: 1.5px solid var(--border-light);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          transition: var(--transition);
          outline: none;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--text-primary);
          box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.08);
        }

        .form-submit-btn {
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .info-cards-subgrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
