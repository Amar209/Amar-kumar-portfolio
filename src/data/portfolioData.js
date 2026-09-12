export const portfolioData = {
  personalInfo: {
    name: "Amar Kumar",
    title: "Hi, I'm Amar Kumar.",
    headline: "FULL-STACK & AI ENGINEER",
    subheadline: "BUILDING HIGH-PERFORMANCE WEB APPS, REAL-TIME SYSTEMS & DESKTOP AI ASSISTANTS",
    bio: "Passionate Software Developer with hands-on experience in full-stack web development, real-time WebRTC conferencing, desktop AI integration, and machine learning pipelines. Experienced across React, Node.js, Express, Python, Electron, and cloud databases.",
    email: "workwithamarkumar@gmail.com",
    phone: "+91 8904328995",
    location: "Bangalore, India",
    availability: "Available for Hire",
    socials: {
      github: "https://github.com/Amar209",
      linkedin: "https://www.linkedin.com/in/amar-kumar-522591258/",
      email: "mailto:workwithamarkumar@gmail.com"
    }
  },

  stats: [
    { label: "EXPERIENCE", value: "2 Internships" },
    { label: "PROJECTS BUILT", value: "4+ Full-Stack & AI" },
    { label: "EDUCATION", value: "B.Tech CSE @ Presidency" },
    { label: "CGPA", value: "7.10 / 10" }
  ],

  marqueeItems: [
    "FULL-STACK DEVELOPER",
    "GENERATIVE AI & ML",
    "ELECTRON & DESKTOP AI",
    "WEBRTC & WEBSOCKETS",
    "REACT & NODE.JS",
    "PYTHON & FLASK",
    "FLUTTER & MOBILE",
    "MONGODB & MYSQL"
  ],

  skillCategories: [
    {
      name: "Programming Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 90 },
        { name: "JavaScript (ES6+)", level: 92 },
        { name: "SQL", level: 82 },
        { name: "HTML5 / CSS3", level: 95 }
      ]
    },
    {
      name: "Web & Backend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Node.js", level: 88 },
        { name: "Flask", level: 82 },
        { name: "RESTful APIs", level: 92 },
        { name: "WebSockets & WebRTC", level: 85 }
      ]
    },
    {
      name: "Desktop & Mobile",
      skills: [
        { name: "Electron IPC", level: 88 },
        { name: "Flutter", level: 78 },
        { name: "React Native", level: 80 },
        { name: "Native Android", level: 75 }
      ]
    },
    {
      name: "Databases & DevOps",
      skills: [
        { name: "MongoDB", level: 88 },
        { name: "MySQL", level: 82 },
        { name: "Git & GitHub", level: 92 },
        { name: "Docker", level: 80 },
        { name: "GitHub Actions", level: 78 }
      ]
    }
  ],

  projects: [
    {
      id: "arc-ai",
      title: "ARC AI – Desktop AI Assistant",
      subtitle: "Personal Project | July 2026 – Aug 2026",
      category: "AI & Desktop",
      tags: ["React", "Electron", "Node.js", "Llama 3.1", "Voice & OCR"],
      description: "A desktop AI assistant running Llama 3.1 locally that executes voice commands, launches system apps, and monitors active code builds for errors via OCR.",
      details: [
        "Built a desktop AI assistant using React, Electron, and Node.js running Llama 3.1 locally on Windows for instant, private AI execution.",
        "Engineered continuous voice listening with wake-word activation, eliminating manual trigger buttons.",
        "Added OCR-based screen monitoring to detect build errors in real-time while coding.",
        "Used Electron IPC for secure IPC bridge communication between frontend, AI services, and native Windows OS calls."
      ],
      featured: true,
      github: "https://github.com",
      demo: "#",
      badge: "FEATURED AI PROJECT"
    },
    {
      id: "gurukul-we4nest",
      title: "Gurukul & We4Nest Platforms",
      subtitle: "Software Developer Intern @ Irasoft System | Jun 2026 – Aug 2026",
      category: "Full-Stack",
      tags: ["React", "Express.js", "MongoDB", "WebRTC", "WebSockets"],
      description: "End-to-end virtual classroom with SFU WebRTC video conferencing alongside Express.js REST APIs for logistics order tracking.",
      details: [
        "Built the Gurukul virtual classroom platform end-to-end: Express.js backend, MongoDB schemas, and responsive React frontend.",
        "Architected SFU-based WebRTC video conferencing with WebSocket signaling for lag-free multi-student classrooms.",
        "Developed order tracking and scheduling REST APIs for We4Nest logistics platform during beta testing."
      ],
      featured: true,
      github: "https://github.com",
      demo: "#",
      badge: "PRODUCTION INTERNSHIP"
    },
    {
      id: "wildfire-ml",
      title: "Wildfire Risk Prediction Pipeline",
      subtitle: "Generative AI Intern @ Infosys Springboard | Nov 2025 – Jan 2026",
      category: "AI & ML",
      tags: ["Python", "Scikit-Learn", "Pandas", "Flask", "REST API"],
      description: "Machine learning pipeline analyzing weather metrics to forecast wildfire risk levels in real time, served via a Flask API.",
      details: [
        "Built an ML pipeline in Python using Scikit-Learn and Pandas to calculate wildfire risks from meteorological data.",
        "Merged structured and unstructured weather datasets prior to training.",
        "Deployed predictions behind a high-throughput Flask REST API with feature-importance diagnostic analysis."
      ],
      featured: true,
      github: "https://github.com",
      demo: "#",
      badge: "ML PIPELINE"
    },
    {
      id: "fake-account-detection",
      title: "Fake Account Detection in Social Media",
      subtitle: "Coursework Project @ Presidency University | Jan 2024 – Feb 2025",
      category: "AI & Hardware",
      tags: ["Python", "Machine Learning", "Raspberry Pi", "Behavioral Data"],
      description: "An anomaly detection system flagging fake social media accounts based on behavior patterns, deployed on Raspberry Pi.",
      details: [
        "Built a Python detection algorithm identifying suspicious accounts based on metadata and activity patterns.",
        "Deployed and tested on a Raspberry Pi to ensure minimal CPU and RAM resource utilization.",
        "Optimized detection threshold logic to minimize false positives."
      ],
      featured: false,
      github: "https://github.com",
      demo: "#",
      badge: "IOT & SECURITY"
    }
  ],

  experience: [
    {
      company: "Irasoft System",
      role: "Software Developer Intern",
      period: "Jun 2026 – Aug 2026",
      location: "Remote / Hybrid",
      summary: "Worked on core logistics APIs and built an end-to-end WebRTC virtual classroom platform.",
      highlights: [
        "Built Express.js REST APIs for order tracking and scheduling on We4Nest logistics platform.",
        "Developed Gurukul platform end-to-end: Express.js backend, MongoDB schemas, and React frontend.",
        "Integrated SFU WebRTC video conferencing with WebSocket signaling for low-latency live classes."
      ]
    },
    {
      company: "Infosys Springboard",
      role: "Generative AI Intern",
      period: "Nov 2025 – Jan 2026",
      location: "Remote",
      summary: "Engineered machine learning pipelines and real-time inference APIs for meteorological risk prediction.",
      highlights: [
        "Developed an ML pipeline (Python, Scikit-learn, Pandas) predicting wildfire risk from weather metrics.",
        "Cleaned and merged structured + unstructured weather datasets.",
        "Deployed model behind a Flask REST API and conducted feature-importance analysis."
      ]
    }
  ],

  education: {
    institution: "Presidency University",
    degree: "Computer Science and Engineering (B.Tech)",
    period: "Nov 2022 – Jun 2026",
    score: "CGPA: 7.10",
    location: "Bangalore, India"
  }
};
