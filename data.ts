import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Collaborated", value: "10+" },
  { label: "Happy Clients", value: "10+" },
  { label: "Branding Experince", value: "6+" },
  
];

export const highlights = [
  { icon: MapPin, text: "Based in Blantyre,MW" },
  { icon: Briefcase, text: "Open for a full-time role or freelance work" },
  { icon: GraduationCap, text: "CS Graduate from UNIMA-Chancellor College" },
  { icon: Coffee, text: "Powered by Allah first then Curiocity" },
];

export const userReviewData = [
  {
    id: 1,
    name: "Cassim Mikochi",
    profession: "Creative Designer",
    userImage: "/images/cayie.jpg",
    review:
      "A wonderful experience! The platform made it easy to find exactly what I needed. lorem ipsum dolor sit ame",
  },
  {
    id: 2,
    name: "Cassim Mikochi",
    profession: "Front End Developer",
    userImage: "/images/cayie.png",
    review:
      "Great selection of properties and seamless process. Highly recommended for anyone looking to invest.",
  },
  {
    id: 3,
    name: "Cassim Mikochi",
    profession: "Web developer",
    userImage: "/images/cayie.jpg",
    review:
      "The website helped me find my dream home quickly and hassle-free. Exceptional service!",
  },
  {
    id: 4,
    name: "Zainab Mikochi",
    profession: "Interior Designer",
    userImage: "/images/cayie.jpg",
    review:
      "Fantastic range of properties with clear details. The best platform for home and design inspiration!",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "cassimmikochi@gmail.com",
    href: "cassimmikochi@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+265 (0) 883-456 713",
    href: "+265 (0) 883-456 713",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lilongwe, Area 25 C",
    href: "https://goo.gl/maps/ZzBmNqiNcfntVG55A",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/CassimFazcajDeveloper", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/cassim-m-balaka-127705235/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
];

export const experiences = [
  {
    type: "work",
    title: "Junior Full-Stack Engineer",
    company: "Madyo Limited",
    period: "DEC 2025 - Present",
    description:
      "At Madyo Limited, I develop simple to moderately complex code under supervision in maintaining company systems, contributing to the creation of small modules and the maintenance of existing systems by fixing minor bugs. I am also involved in building RESTful APIs and assisting in the development of responsive web interfaces. In addition, I support daily office operations and technical duties as assigned.",
    technologies: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    type: "work",
    title: "Creative Designer & Front-End Developer",
    company: "Qoreban Systems",
    period: "MARCH 2025 - JAN",
    description:
      "Translated UI/UX designs and creative concepts into functional, visually appealing web pages. Collaborated with developers and project teams to ensure consistent branding and smooth user experience. ",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science (Education)",
    company: "University Of Malawi",
    period: "2019 - 2025",
    description:
      "Courses studied: Object-Oriented System Analysis and Design, Information Systems, Database Sociology, Systems and Security, Operating Systems.",
    technologies: ["Research", "AI/ML", "Distributed Systems"],
  },
  {
    type: "work",
    title: "ICT Technician",
    company: "Computers For Enhanced Education",
    period: "2024 - 2024",
    description:
      "Install and configure hardware, software, and network in schools. Develop and implement a maintenance schedule for ICT systems. Provide Technical support to teachers and students both on-site and remotely.",
    technologies: ["JavaScript", "PHP", "MySQL", "WordPress"],
  },
  {
    type: "education",
    title: "Lilongwe Islamic Secondary School",
    company: "",
    period: "2014 - 2018",
    description:
      "Strong foundation in algorithms, data structures, and software engineering principles.",
    technologies: ["Computer Science", "Mathematics", "Problem Solving"],
  },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/CassimFazcajDeveloper", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/cassim-m-balaka-127705235/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "cassimmikochi@gmail.com", label: "Email" },
];

export const courses = [
  {
    title: "Adobe Photoshop Essentials",
    description:
      "Learn professional photo editing, retouching, poster design, social media graphics, and creative digital art using Adobe Photoshop. This course is perfect for beginners and aspiring graphic designers who want to create stunning visual content.",
    image: "/images/rest.jpg",
    language: "Chichewa",
    courseUrl: "/courses/adobe-photoshop",
  },

  {
    title: "Adobe Illustrator Essentials",
    description:
      "Master vector design and illustration with Adobe Illustrator. Learn logo creation, icon design, typography, business card design, and professional branding techniques used by modern designers.",
    image: "/images/rest.jpg",
    language: "Chichewa",
    courseUrl: "/courses/adobe-illustrator",
  },

  {
    title: "Microsoft Word Course",
    description:
      "Build strong document creation and formatting skills using Microsoft Word. Learn professional typing, CV and report design, tables, page layouts, and office productivity techniques for school and business use.",
    image: "/images/rest.jpg",
    language: "Chichewa",
    courseUrl: "/courses/microsoft-word",
  },

  {
    title: "Microsoft Excel Fundamentals",
    description:
      "Learn how to organize, calculate, and analyze data using Microsoft Excel. This course covers formulas, functions, charts, spreadsheets, data entry, and practical business applications.",
    image: "/images/rest.jpg",
   language: "Chichewa",
   price: "",
    courseUrl: "/courses/microsoft-excel",
  },

  {
    title: "Microsoft Access Database",
    description:
      "Create professional social media posts, presentations, flyers, posters, and marketing materials using Canva. Perfect for entrepreneurs, students, and content creators.",
    image: "/images/rest.jpg",
    language: "Chichewa",
    courseUrl: "www.course.com",
  },

  {
    title: "Introduction to Web Design",
    description:
      "Learn the basics of modern web design including layouts, colors, typography, responsive design, and creating attractive user interfaces for websites and digital platforms.",
    image: "/images/rest.jpg",
    language: "Chichewa",
    courseUrl: "/courses/web-design",
  },

  {
    title: "Digital Skills & ICT Essentials",
    description:
      "Develop practical digital literacy and ICT skills including internet usage, email communication, file management, online safety, and productivity tools for everyday professional use.",
    image: "/images/rest.jpg",
    language: "Chichewa",
    courseUrl: "/courses/ict-essentials",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native (Yet)", icon: Smartphone },
      { name: "Vue.js (Yet)", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js (Good)", icon: Server },
      { name: "Express (Good)", icon: Layers },
      { name: "MongoDB (Good)", icon: Database },
      { name: "PostgreSQL(Yet)", icon: Database },
      { name: "GraphQL (Yet)", icon: Cpu },
      { name: "REST APIs (Good)", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git (Good)", icon: GitBranch },
      { name: "Docker (Yet)", icon: Server },
      { name: "FlutterFlow (Good)", icon: Cloud },
      { name: "Flutter (Good)", icon: Terminal },
      { name: "Figma (Excellent)", icon: Palette },
      { name: "CI/CD (Yet)", icon: Cpu },
    ],
  },
];
