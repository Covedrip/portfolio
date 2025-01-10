import {
  python,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  omni,
  metbank,
  booking,
  recipe,
  callcenter,
  imdb,
  django,
  js,

 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "Django", icon: django },
  { title: "JavaScript", icon: js },
  { title: "React", icon: reactjs },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Python", icon: python},
  { name: "Django", icon: django},
  { name: "git", icon: git },
  
];

export const experiences = [
  {
    title: "Systems and Network Administration Intern",
    company_name: "Metbank Limited",
    icon: metbank,
    iconBg: "#161329",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Managed system backups, disaster recovery, and cybersecurity measures, including monitoring network traffic, patching vulnerabilities, and implementing Active Directory and Group Policy for secure resource access.",
      "Administered DB2 databases, performed maintenance, and monitored uptime for critical banking platforms like mobile and internet banking.",
      "rovided technical support and solutions for operational issues, including T24 core banking system and Postilion, while assisting users via phone, email, live chat, and web teleconference.",
      "Ensured secure and efficient IT operations by monitoring LAN/WAN environments, assisting with Microsoft 365 migrations, and maintaining confidentiality and best practices to mitigate security risks.",
      "Contributed to cybersecurity efforts by staying updated on threats, performing vulnerability assessments, and participating in implementing a Security Incident Response Plan (SIRP).",
    ],
  },
  {
    title: "Software Developer",
    company_name: "OmniContact International",
    icon: omni,
    iconBg: "#161329",
    date: "Sep 2024 - current",
    points: [
      "Design and implement RESTful APIs using Django REST Framework (DRF) to manage business logic, secure user authentication with JWT, and facilitate data exchange with React.js frontends.",
      "Manage and optimize relational databases using PostgreSQL and MySQL, ensuring data integrity and performance with efficient queries and Django ORM.",
      "Develop custom backend solutions for specific business needs, such as room booking systems and conflict detection algorithms, while writing unit and integration tests to ensure code reliability.",
      "Build dynamic, responsive, and user-friendly interfaces using React.js, with reusable components, efficient state management (Redux/React Context API), and seamless API integration.",
      "Automate deployment pipelines with GitHub Actions and resolved performance bottlenecks in both frontend and backend systems to enhance overall application performance and user experience.",
    ],
  },

];

export const projects = [
  {
    name: "Omni Contact Booking System ",
    description:
      "Backend to support database functionality for the Booking System ",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Django REST", color: "pink-text-gradient" },
    ],
    image: booking,
    source_code_link: "https://github.com/tadiwa1909/Booking_System_Backend",
  },
  {
    name: "Collaborative Recipe API",
    description:
      "An API that help people tp and and collaborate on recipes.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Django REST", color: "pink-text-gradient" },
    ],
    image: recipe,
    source_code_link: "https://github.com/Covedrip/Collaborative-Recipe-App-Backend-",
  },
  {
    name: "Call Center Management System",
    description:
      "An API that tracks time worked, allocates campaigns and manages work allocation to different agents.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Django REST", color: "pink-text-gradient" },
    ],
    image: callcenter,
    source_code_link:
      "https://github.com/Covedrip/Call-Center-Management-System-API-backend-",
  },
  {
    name: "IMDb API Clone",
    description:
      "IMDB Clone",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Django", color: "green-text-gradient" },
      { name: "Django REST", color: "pink-text-gradient" },
    ],
    image: imdb,
    source_code_link: "https://github.com/Covedrip/IMDBClone",
  }

];
