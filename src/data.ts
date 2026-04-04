export const personalInfo = {
  name: "Htoo Charr Aung",
  role: "Junior Odoo Developer & AI Enthusiast",
  email: "xtoocharraung@gmail.com",
  phone: "09775533929",
  location: "Sintgaing, Mandalay",
  linkedin: "https://linkedin.com/in/htoo-charr-aung-767b0b37",
  github: "https://github.com/htoocharraung", // Placeholder
  about: "Graduated from UCS (Mdy) and former IT intern at ICTRC, Yangon. Skilled in Python, programming fundamentals, UI/UX design, and team leadership. Passionate about applying technical and design knowledge to real-world IT solutions.",
};

export const education = [
  {
    degree: "M.CSC (Candidate)",
    institution: "University of Computer Studies (Mandalay)",
    period: "Present",
  },
  {
    degree: "BCSC",
    institution: "University of Computer Studies (Mandalay)",
    period: "Graduated",
    description: "Skilled in Python, programming fundamentals, UI/UX design, and team leadership.",
  },
];

export const experience = [
  {
    role: "Junior Odoo Developer",
    company: "Myanmar Information Technology (MIT), Yangon",
    period: "Present",
    description: "Specializing in Odoo customization, module development, and ERP system implementation. Experienced in Python, PostgreSQL, XML, and backend logic development. Focused on optimizing business workflows and delivering practical ERP solutions.",
  },
  {
    role: "Project Leader: AI Project",
    company: "Information and Communication Technology Research Center (ICTRC), Yangon",
    period: "Past",
    description: "Led the end-to-end development and delivery of an AI-based helmet detection and license plate recognition system using Python, OpenCV, and machine learning. Orchestrated all project resources and team coordination, delivering the project ahead of schedule.",
  },
  {
    role: "Seminar Presenter",
    company: "ICTRC, Yangon",
    period: "Past",
    description: "Prepared and delivered IT/AI seminars for ICTRC peers and interns. Created all supporting technical documentation and slide decks. Facilitated interactive Q&A sessions to enhance team knowledge.",
  },
  {
    role: "Project Showcase",
    company: "Time City, Yangon",
    period: "Past",
    description: "Presented university IT projects at the public showcase event held at Time City. Demonstrated system features, functionality, and real-world applications to visitors and evaluators.",
  },
];

export const skills = {
  programming: ["Python", "HTML/CSS", "JavaScript", "PostgreSQL", "XML"],
  design: ["Figma", "Adobe XD", "UI/UX Design"],
  softSkills: ["Problem-solving", "Teamwork", "Adaptability", "Strong Communication", "Collaboration", "Time Management"],
  others: ["Advanced Excel", "Odoo Customization", "ERP Implementation", "OpenCV", "Machine Learning"],
};

export const projects = [
  {
    id: "helmet-detection",
    title: "AI Helmet Detection System",
    overview: "An AI-based system designed to detect whether motorcyclists are wearing helmets in real-time. This project was developed for the Information and Communication Technology Research Center (ICTRC).",
    features: [
      "Real-time object detection using YOLO",
      "License plate recognition for non-compliant riders",
      "Automated alert system",
      "High accuracy in various lighting conditions",
    ],
    techStack: ["Python", "OpenCV", "TensorFlow/PyTorch", "YOLO"],
    images: [
      "https://picsum.photos/seed/helmet1/800/600",
      "https://picsum.photos/seed/helmet2/800/600",
      "https://picsum.photos/seed/helmet3/800/600",
    ],
    github: "https://github.com/htoocharraung/helmet-detection",
    demo: "#",
  },
  {
    id: "odoo-erp-customization",
    title: "Odoo ERP Customization",
    overview: "Customized Odoo modules for various business workflows, focusing on inventory management and sales optimization.",
    features: [
      "Custom module development",
      "PostgreSQL database optimization",
      "XML view customization",
      "API integration with external services",
    ],
    techStack: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript"],
    images: [
      "https://picsum.photos/seed/odoo1/800/600",
      "https://picsum.photos/seed/odoo2/800/600",
    ],
    github: "https://github.com/htoocharraung/odoo-custom",
    demo: "#",
  },
  {
    id: "portfolio-website",
    title: "Professional Portfolio",
    overview: "A modern, responsive portfolio website built to showcase my skills and projects as a developer.",
    features: [
      "Responsive design with Tailwind CSS",
      "Interactive project modals",
      "Working contact form with EmailJS",
      "Dark mode support",
      "Smooth animations with Framer Motion",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://picsum.photos/seed/portfolio1/800/600",
      "https://picsum.photos/seed/portfolio2/800/600",
    ],
    github: "https://github.com/htoocharraung/portfolio",
    demo: "https://portfolio-demo.com",
  },
];

export const testimonials = [
  {
    name: "ICTRC Supervisor",
    role: "Senior Researcher",
    content: "Htoo Charr Aung demonstrated exceptional leadership and technical skills during the AI project. His ability to deliver ahead of schedule was impressive.",
  },
  {
    name: "MIT Team Lead",
    role: "Senior Odoo Developer",
    content: "A quick learner who quickly grasped Odoo's complex architecture. His contributions to our ERP implementations have been invaluable.",
  },
];
