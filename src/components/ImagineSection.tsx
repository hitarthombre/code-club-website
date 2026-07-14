"use client";

import React from "react";
import { ArrowRight, GitBranch } from "lucide-react";
import styles from "./ImagineSection.module.css";

interface ProjectCard {
  id: number;
  image: string;
  creator: string;
  boldedName: string;
  context: string;
}

const projects: ProjectCard[] = [
  {
    id: 1,
    image: "/photos/electronics_workshop.png",
    creator: "Alexander (16) from US made ",
    boldedName: "Brew75",
    context: " for Hack Club Blueprint.",
  },
  {
    id: 2,
    image: "/photos/coding_session.png",
    creator: "Andromeda, Nihaal, Rimma (18, 16, 15) from UK & US made ",
    boldedName: "Kamikamace",
    context: " for Hack Club Daydream.",
  },
  {
    id: 3,
    image: "/photos/hackathon_fun.png",
    creator: "Deltea (16) from US made ",
    boldedName: "Starbird",
    context: " for Hack Club Milkyway.",
  },
  {
    id: 4,
    image: "/photos/maker_lab.png",
    creator: "Clément (17) from France made ",
    boldedName: "AngstromIO",
    context: " for Hack Club Blueprint.",
  },
  {
    id: 5,
    image: "/photos/campfire_gathering.png",
    creator: "Yessa (18) from Philippines made ",
    boldedName: "Specter",
    context: " for Hack Club Milkyway.",
  },
  {
    id: 6,
    image: "/photos/coding_session.png",
    creator: "Matthew (17) from Canada made ",
    boldedName: "SoundBoard",
    context: " for Hack Club Daydream.",
  },
  {
    id: 7,
    image: "/photos/campfire_gathering.png",
    creator: "Sarah (16) from UK made ",
    boldedName: "Lumina",
    context: " for Hack Club Milkyway.",
  },
  {
    id: 8,
    image: "/photos/electronics_workshop.png",
    creator: "Liam (15) from US made ",
    boldedName: "RoboGrip",
    context: " for Hack Club Blueprint.",
  },
];

export default function ImagineSection() {
  // Duplicate projects to create a seamless infinite scroll loop
  const marqueeProjects = [...projects, ...projects];

  return (
    <section className={styles.section}>
      {/* Peeking Mascot Sticker (top right) */}
      <div className={styles.mascotSticker}>
        <svg className={styles.paws} viewBox="0 0 100 100">
          {/* Peeking Cat paws SVG */}
          {/* Paw 1 */}
          <ellipse cx="25" cy="55" rx="8" ry="12" fill="white" />
          <circle cx="15" cy="38" r="5" fill="white" />
          <circle cx="25" cy="32" r="5.5" fill="white" />
          <circle cx="36" cy="38" r="5" fill="white" />
          
          {/* Paw 2 */}
          <ellipse cx="65" cy="65" rx="9" ry="13" fill="white" />
          <circle cx="53" cy="48" r="5" fill="white" />
          <circle cx="64" cy="42" r="5.5" fill="white" />
          <circle cx="75" cy="48" r="5" fill="white" />
        </svg>
      </div>

      <div className={styles.header}>
        <h2 className={styles.title}>
          Imagine a world where <span className={styles.highlight}>you made this:</span>
        </h2>
        <p className={styles.subtitle}>
          100,000 teens started exactly where you are. We&apos;re here to help you
          build your first crazy thing.
        </p>
      </div>

      {/* Infinite Scrolling Marquee Wrapper */}
      <div className={styles.marqueeContainer}>
        <div className={styles.track}>
          {marqueeProjects.map((project, idx) => (
            <div key={`${project.id}-${idx}`} className={styles.card}>
              <div className={styles.cardImageContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.cardImage}
                  src={project.image}
                  alt={project.boldedName}
                  loading="lazy"
                />
              </div>

              {/* Card Content with padded text and footer */}
              <div className={styles.cardContent}>
                <div className={styles.cardBody}>
                  {project.creator}
                  <span className={styles.bold}>{project.boldedName}</span>
                  {project.context}
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.link}>
                    Try it out <ArrowRight className={styles.arrowIcon} />
                  </span>
                  <GitBranch className={styles.iconRight} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
