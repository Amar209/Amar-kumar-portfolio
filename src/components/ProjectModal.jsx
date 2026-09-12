import React from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <span className="modal-badge">{project.badge}</span>
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-subtitle">{project.subtitle}</p>
        </div>

        {/* Tech Stack Tags */}
        <div className="modal-tags">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="modal-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="modal-section">
          <h4 className="section-label">
            <span className="starburst">✴</span> OVERVIEW
          </h4>
          <p className="modal-desc">{project.description}</p>
        </div>

        {/* Technical Key Highlights */}
        <div className="modal-section">
          <h4 className="section-label">
            <span className="starburst">✴</span> KEY TECHNICAL IMPLEMENTATION & IMPACT
          </h4>
          <ul className="details-list">
            {project.details.map((detail, idx) => (
              <li key={idx} className="detail-item">
                <CheckCircle size={18} className="detail-icon" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="modal-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <GithubIcon size={18} />
            <span>VIEW SOURCE CODE</span>
          </a>

          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink size={18} />
              <span>LIVE DEMO</span>
            </a>
          )}
        </div>
      </div>

      <style>{`
        .modal-header {
          margin-bottom: 1.25rem;
          padding-right: 2.5rem;
        }

        .modal-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--accent-red);
          background-color: rgba(255, 59, 0, 0.08);
          border: 1px solid rgba(255, 59, 0, 0.2);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-sm);
          margin-bottom: 0.75rem;
          letter-spacing: 0.08em;
        }

        .modal-title {
          font-size: 1.75rem;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .modal-subtitle {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.75rem;
        }

        .modal-tag {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
        }

        .modal-section {
          margin-bottom: 1.75rem;
        }

        .section-label {
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .modal-desc {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--text-secondary);
        }

        .details-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .detail-icon {
          color: var(--accent-red);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-light);
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
};
