import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div
      className="portfolio-app"
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#0a0c10',
        color: '#f8fafc',
        backgroundImage: `
          radial-gradient(circle at 75% 25%, rgba(30, 41, 59, 0.45) 0%, transparent 55%),
          radial-gradient(circle at 20% 80%, rgba(15, 23, 42, 0.5) 0%, transparent 60%),
          radial-gradient(circle at 50% 50%, rgba(10, 12, 16, 0.8) 0%, transparent 100%)
        `,
        backgroundAttachment: 'fixed',
      }}
    >
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Projects />
        <Education />
        <Experience />
        <Footer />
      </main>
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;



