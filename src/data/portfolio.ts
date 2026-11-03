/* ------------------------------------------------------------------ */
/* All portfolio content — Naveen Ekanayake                            */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
]

export const profile = {
  firstName: "Naveen",
  name: "Naveen Ekanayake",
  badge: "Aspiring Software Engineer",
  role: "Full Stack Developer",
  tagline:
    "I build modern web applications, explore AI & DevOps, and always strive to learn something new.",
  email: "nekanayake789@gmail.com",
  phone: "0726752958",
  location: "Sri Lanka",
  github: "https://github.com/NaveenEkanayake",
  linkedin: "https://www.linkedin.com/in/naveen-ekanayake/",
}

export const intro = {
  title: "NAVEEN EKANAYAKE",
  tagline: "Full Stack Developer · AI & DevOps enthusiast",
  scrollHint: "SCROLL TO ENTER",
  signature: { name: "naveen.dev", url: "https://github.com/NaveenEkanayake" },
  scrubDistance: 3200,
}

export const about = {
  badge: "About Me",
  titleA: "Who Am ",
  titleB: "I?",
  paragraph:
    "I'm Naveen Ekanayake, an undergraduate software engineer with a passion for building scalable web applications, solving real-world problems, and constantly learning new technologies.",
  pills: ["Full Stack Developer", "Problem Solver", "Quick Learner"],
  highlights: [
    "BSc in Software Engineering (Cardiff Met Uni)",
    "HND in Information Technology (SLIIT City Uni)",
    "Software Engineering Intern (Exclusive Web Arts)",
  ],
  chips: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "Java",
    "C#",
    "ASP.NET MVC",
    "Tailwind CSS",
    "MongoDB",
    "SQL",
    "Firebase",
    "Docker",
    "Azure DevOps",
    "Git/GitHub",
    "YOLOv8",
    "XGBoost",
  ],
}

export type Project = {
  title: string
  description: string
  stack: string[]
  icon: "paw" | "sparkles" | "heart" | "brain" | "waves" | "movie" | "graduation" | "person"
  github: string
  liveUrl?: string
  status?: "completed" | "ongoing" | "active"
}

export const projects: Project[] = [
  {
    title: "LOGORA — AI Image Generator",
    description:
      "Subscription SaaS that generates AI images from text prompts, with credit-based Stripe billing, user authentication and a responsive Tailwind front end.",
    stack: ["React", "Node.js", "Stripe", "Tailwind", "MongoDB"],
    icon: "sparkles",
    github: "https://github.com/NaveenEkanayake/LOGORA-AI-Image-Generator",
    status: "active",
  },
  {
    title: "Furry Pet Clinic",
    description:
      "MVC clinic platform managing three core workflows — appointments, patient records and inventory — with real-time notifications and role-based dashboards.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    icon: "paw",
    github: "https://github.com/NaveenEkanayake/F2-Clinic",
    status: "active",
  },
  {
    title: "HealthPredict — Student Wellness",
    description:
      "Full-stack health intelligence platform that tracks student health data and predicts at-risk conditions with a trained XGBoost model for medical staff.",
    stack: ["Python", "XGBoost", "Django", "React"],
    icon: "heart",
    github: "https://github.com/NaveenEkanayake/Computational-intelligence-Assignement",
    status: "active",
  },
  {
    title: "Autism Detection System",
    description:
      "AI healthcare platform performing early autism screening from behavioral pattern analysis. Allows parents and caregivers to assess early autism status of children aged 3–5 through a user-friendly web interface.",
    stack: ["React", "Node.js", "MongoDB", "AI/ML"],
    icon: "brain",
    github: "https://github.com/NaveenEkanayake/Autism-detection-system",
    status: "completed",
  },
  {
    title: "Ocean View Resort",
    description:
      "Full-stack reservation system with role-based Admin and Cashier dashboards, sales analytics charts and automated email notifications for bookings.",
    stack: ["Java", "HTML/CSS", "MySQL"],
    icon: "waves",
    github: "https://github.com/NaveenEkanayake/OceanViewResort",
    status: "active",
  },
  {
    title: "Movie Explorer",
    description:
      "Mobile-first React application that lets users discover and track their favorite films. Fetches real-time data from The Movie Database (TMDb) API with a clean, responsive Material-UI interface.",
    stack: ["React", "TMDb API", "Material-UI", "Vercel"],
    icon: "movie",
    github: "https://github.com/NaveenEkanayake/Movie_Explorer",
    liveUrl: "https://movie-explorer-psi-peach.vercel.app",
    status: "active",
  },
  {
    title: "Class Management System",
    description:
      "Full-featured class management platform built with ASP.NET MVC, managing students, teachers, schedules and assignments with role-based access control.",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap"],
    icon: "graduation",
    github: "https://github.com/NaveenEkanayake/ClassManagement-.ASPNET-",
    status: "active",
  },
  {
    title: "Student Management System",
    description:
      "Django-based student management portal with CRUD operations for student records, attendance tracking, grade management and admin dashboard.",
    stack: ["Django", "Python", "SQLite", "Bootstrap"],
    icon: "person",
    github: "https://github.com/NaveenEkanayake/Student_management-Django-",
    status: "active",
  },
]

export const experience = {
  badge: "My Experience",
  titleA: "Experience & ",
  titleB: "Tools",
  subtitle: "Practical experience and the tools I work with.",
  role: {
    title: "Intern Software Engineer",
    company: "Exclusive Web Arts (Pvt) Ltd",
    period: "Nov 2024 – Dec 2025",
    points: [
      "Turned design mockups into reusable, responsive front-end components that held up across desktop and mobile breakpoints.",
      "Contributed to web-based client projects, developing backend services, database schemas and RESTful API integrations over a 14-month engagement.",
      "Worked on a POS management system, then created a rental management system with the guidance of a senior software engineer.",
      "Diagnosed and fixed defects across frontend, backend and database layers, and tuned slow pages and queries.",
      "Managed version control in Git and GitHub with feature branching, pull requests and peer code review — delivering work consistently within deadlines.",
    ],
  },
  more: ["Freelance Developer & Designer"],
}

export const tools = [
  { name: "React", abbr: "Re", color: "#61dafb" },
  { name: "Next.js", abbr: "Nx", color: "#e9eef8" },
  { name: "Node.js", abbr: "No", color: "#83cd29" },
  { name: "Express", abbr: "Ex", color: "#c3c9d6" },
  { name: "Python", abbr: "Py", color: "#ffd343" },
  { name: "Django", abbr: "Dj", color: "#0c9b58" },
  { name: "Java", abbr: "Jv", color: "#f89820" },
  { name: "C#", abbr: "C#", color: "#9b4f96" },
  { name: ".NET", abbr: ".N", color: "#512bd4" },
  { name: "MongoDB", abbr: "Mn", color: "#47a248" },
  { name: "SQL", abbr: "SQL", color: "#336791" },
  { name: "Firebase", abbr: "Fb", color: "#ffca28" },
  { name: "Docker", abbr: "Dk", color: "#2496ed" },
  { name: "Azure DevOps", abbr: "Az", color: "#0078d4" },
  { name: "Git", abbr: "Git", color: "#f05032" },
  { name: "AWS", abbr: "Aw", color: "#ff9900" },
]

export type Certificate = {
  title: string
  issuer: string
  year?: string
  description: string
}

export const certificates: Certificate[] = [
  {
    title: "Software Project Management",
    issuer: "Foundation",
    description:
      "Learned the project lifecycle, scope, scheduling and risk management — relevant to time management and delivering tasks on schedule.",
  },
  {
    title: "Docker Fundamentals",
    issuer: "LinkedIn",
    year: "2024",
    description:
      "Containers, images and Dockerfiles for running and deploying applications consistently across environments.",
  },
  {
    title: "Azure DevOps for Beginners",
    issuer: "LinkedIn",
    year: "2024",
    description:
      "Azure Boards, Repos and Pipelines — version control, cloud-based DevOps and CI/CD concepts.",
  },
  {
    title: "Gemini Certified Student for AI",
    issuer: "Google",
    year: "2024",
    description:
      "Using generative AI tools effectively and responsibly — relevant to AI integration in applications.",
  },
  {
    title: "Python for Beginners",
    issuer: "Alison",
    year: "2024",
    description:
      "Python syntax, data structures, functions and OOP basics — relevant to backend logic and AI/ML work.",
  },
  {
    title: "Scrum: The Basics",
    issuer: "LinkedIn",
    year: "2024",
    description:
      "Scrum roles, sprints, backlogs and ceremonies — relevant to team collaboration and meeting deadlines.",
  },
]

export const learning = {
  badge: "Learning",
  title: "What I'm Learning Now?",
  headingA: "DevOps & ",
  headingB: "AI/ML",
  subtitle:
    "Exploring cloud, automation and machine learning to level up!",
  tags: [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure DevOps",
    "Machine Learning",
    "Python",
    "TypeScript",
    "PostgreSQL",
    "Linux",
  ],
}

export const contact = {
  badge: "Contact",
  titleA: "Get In ",
  titleB: "Touch",
  subtitle:
    "Feel free to reach out for collaboration, opportunities, or just a chat!",
  script: "Build Better Together",
  cta: "Say Hello",
}
