"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./TechSection.module.css";

interface TechLogo {
  name: string;
  color: string;
  iconUrl?: string;
  svg?: React.ReactNode;
}

const techLogos: TechLogo[] = [
  {
    name: "Git",
    color: "#F05032",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    color: "#FFFFFF",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Node.js",
    color: "#339933",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Antigravity",
    color: "#FF2E93",
    svg: (
      <svg className={styles.logoSvg} viewBox="0 0 64 64" fill="url(#antigrav-grad)">
        <defs>
          <linearGradient id="antigrav-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2e93" />
            <stop offset="100%" stopColor="#ff8a00" />
          </linearGradient>
        </defs>
        {/* Futuristic rocket logo representing Antigravity agent */}
        <path d="M32 4 C32 4, 18 20, 18 36 C18 46, 24 54, 32 58 C40 54, 46 46, 46 36 C46 20, 32 4, 32 4 Z" />
        <path d="M32 20 L26 34 L32 30 L38 34 Z" fill="#ffffff" />
        {/* Flame effect lines */}
        <path d="M28 50 L24 60 L30 54 Z" fill="#ff8a00" />
        <path d="M36 50 L40 60 L34 54 Z" fill="#ff8a00" />
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#F89820",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    color: "#3776AB",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    color: "#00758F",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Redis",
    color: "#D82C20",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "MongoDB",
    color: "#47A248",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

const pills: string[] = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React / Next.js",
  "TailwindCSS",
  "Docker",
  "Express.js",
  "C++ / Arduino",
  "Framer Motion",
];

export default function TechSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Technologies we have taught.</h2>
        <p className={styles.subtitle}>
          Learn, build, and deploy with the tools used by professional developers.
        </p>
      </div>

      {/* Grid of Tech Logos (GitHub, Git, Node, Antigravity...) */}
      <div className={styles.logoRow}>
        {techLogos.map((tech) => (
          <div key={tech.name} className={styles.logoWrapper} title={tech.name}>
            {tech.iconUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className={styles.logoImage} src={tech.iconUrl} alt={tech.name} />
            ) : (
              tech.svg
            )}
            <span className={styles.logoLabel}>{tech.name}</span>
          </div>
        ))}
      </div>

      {/* Pill Badge List */}
      <div className={styles.pillsRow}>
        {pills.map((pill) => (
          <span key={pill} className={styles.pill}>
            {pill}
          </span>
        ))}
      </div>

      {/* Bottom Text Description */}
      <p className={styles.paragraph}>
        Code Club teaches teenagers the fundamentals of software engineering and hardware. Our curriculum is fully open source — anyone can learn{" "}
        <span className={styles.redLink}>exactly how to build cool stuff.</span> If you are ready to start your journey,{" "}
        <span className={styles.redLink}>we&apos;d love to support your learning.</span>
      </p>

      {/* Call to Action Button */}
      <button className={styles.btn} onClick={() => alert("Welcome to the club! Let's build! 🚀")}>
        Start learning now <ArrowRight size={16} />
      </button>
    </section>
  );
}
