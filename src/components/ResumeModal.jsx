import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      const response = await fetch('/resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Amar_Kumar_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      window.open('/resume.pdf', '_blank');
    }
  };

  const handleOpenNewTab = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container resume-modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Action Header */}
        <div className="resume-action-bar">
          <div>
            <h3 className="modal-title">Amar Kumar - RESUME</h3>
            <p className="modal-subtitle">Official Resume PDF</p>
          </div>

          <div className="resume-modal-actions">
            <button onClick={handleOpenNewTab} className="btn-outline-modal">
              <ExternalLink size={16} />
              <span>Open in New Tab</span>
            </button>
            <button onClick={handleDownload} className="btn-primary">
              <Download size={16} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Actual Uploaded Resume PDF Viewer */}
        <div className="resume-pdf-wrapper">
          <iframe
            src="/resume.pdf#toolbar=1"
            title="Amar Kumar Resume PDF"
            className="resume-pdf-frame"
          />
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(11, 15, 23, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
        }

        .resume-modal-container {
          background-color: #0f172a;
          color: #ffffff;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.9);
          width: 100%;
          max-width: 900px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          padding: 1.75rem;
          position: relative;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease;
          z-index: 10;
        }

        .modal-close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
        }

        .resume-action-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
          gap: 1rem;
          padding-right: 2.5rem;
        }

        .modal-title {
          font-family: var(--font-apple);
          font-weight: 800;
          font-size: 1.25rem;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .modal-subtitle {
          font-family: var(--font-apple);
          font-size: 0.875rem;
          color: #94a3b8;
        }

        .resume-modal-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .btn-outline-modal {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.6rem 1.1rem;
          border-radius: 9999px;
          font-family: var(--font-apple);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-outline-modal:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.35);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #0f172a;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          font-family: var(--font-apple);
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-primary:hover {
          background: #f8fafc;
          transform: translateY(-1px);
        }

        .resume-pdf-wrapper {
          width: 100%;
          height: 68vh;
          border-radius: 12px;
          overflow: hidden;
          background-color: #1e293b;
        }

        .resume-pdf-frame {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 640px) {
          .resume-modal-container {
            padding: 1.25rem;
          }
          .resume-action-bar {
            flex-direction: column;
            align-items: flex-start;
          }
          .resume-modal-actions {
            width: 100%;
            justify-content: flex-start;
          }
          .resume-pdf-wrapper {
            height: 55vh;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeModal;
