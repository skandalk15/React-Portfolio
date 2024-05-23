import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kernellogo from "@/public/kernel_logo.png";
import yelplogo from "@/public/yelp_logo.png";
import tokenlogo from "@/public/token_bucket.png";
import pentelogo from "@/public/pente_logo.png";

import { IoIosCode } from "react-icons/io";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.E in Computer Engineering",
    location: "University of Mumbai, Mumbai IN",
    description:
      "GPA: 9.75/10.0",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Software Development Engineer - I (Java), Dream11",
    location: "Mumbai, India",
    description:
      "Spearheaded the development of a high-performance Leaderboard API at Dream11, enhancing user experience for over 10 million users and driving a 25% improvement in response times.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  // {
  //   title: "PG Diploma in Data Science and Business Analytics",
  //   location: "Texas McCombs Business School",
  //   description: "",
  //   icon: React.createElement(IoIosCode),
  //   date: "2021 - 2022",
  // },
  // {
  //   title: "Software Engineer Intern",
  //   location: "Amotions Inc, San Francisco, USA",
  //   description:
  //     "Worked on a full-stack project for a startup. I developed a web app for tracking mental health of employees.",
  //   icon: React.createElement(FaReact),
  //   date: "2023",
  // },
  {
    title: "MS in Computer Science",
    location: "University of Southern California, Los Angeles, USA",
    description:
      "GPA: 3.61/4.0",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
] as const;

export const projectsData = [

  {
    title: "Weenix Operating System",
    description: 'Engineered kernel modules, synchronization primitives, a Virtual File System, and a Virtual Memory module for the Weenix OS, enhancing process/thread management and system performance. Constructed a robust, adaptable file system interface and improved user space execution efficiency.',
    tags: ["C", "Qemu", "GNU/Linux"],
    imageUrl: kernellogo,
  },
  {
    title: "Token Bucket Filter Emulator",
    description:"Developed a multi-threaded token bucket filter emulator using pthreads, ensuring thread safety with mutex synchronization. Implemented Unix signal handling, dynamic mode features, and a comprehensive logging system for enhanced adaptability and performance transparency.",
    tags: ["C", "GNU/Linux", "MultiThreading"],
    imageUrl: tokenlogo,
  },
  {
    title: "Yelp Search - A Smart Business Discovery Web App",
    description:" Created a dynamic web app with Angular CLI and Express.js, integrating Yelp and Google Maps APIs for business details, locations, and enriched user reviews.",
    tags: ["Angular CLI", "API", "Express JS", "Android app development"],
    imageUrl: yelplogo,
  },
  {
    title: "Pente Game",
    description:"Implemented a Pente game agent using Minimax and Alpha-Beta pruning, achieving a 90% win rate against AI and human opponents with optimized 4-depth analysis in 10 seconds for 19x19 grids, demonstrating strategic gameplay and computational efficiency.",
    tags: ["Python"],
    imageUrl: pentelogo,
  },
] as const;

export const skillsData = [
  "Java",
  "C",
  "Python",
  "JavaScript",
  "SQL",
  "Operating Systems",
  "Angular.js",
  "React",
  "Next.js",
  "Node.js",
  "Flask",
  "Git",
  "MongoDB",
  "AWS",
  "Linux",
  "Express",
  "Postman",
  "Docker",
] as const;