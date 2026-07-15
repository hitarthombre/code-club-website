"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./UpcomingEvents.module.css";

interface EventCard {
  id: number;
  year: number;
  date: string;
  title: string;
  description: string;
}

const events: EventCard[] = [
  {
    id: 1,
    year: 2026,
    date: "8 October",
    title: "Clash Of Code",
    description: "Three-round competitive coding competition for beginners to advanced LeetCode enthusiasts.",
  },
  {
    id: 2,
    year: 2026,
    date: "19 January",
    title: "VibeCode101",
    description: "Hands-on workshop on the fundamentals of vibe coding conducted by alumnus Tanishk Patel.",
  },
  {
    id: 3,
    year: 2025,
    date: "13 February",
    title: "Shell Craft",
    description: "Workshop introducing shell scripting through interactive demonstrations to improve workflow automation.",
  },
  {
    id: 4,
    year: 2025,
    date: "18 February",
    title: "Prompt to Poster",
    description: "AI-powered design workshop where participants converted text prompts into posters using AI tools.",
  },
  {
    id: 5,
    year: 2024,
    date: "18 October",
    title: "Debug Duel",
    description: "Team-based debugging competition with three rounds: Code Emoji, Script Shuffle, and Unzip the File.",
  },
  {
    id: 6,
    year: 2023,
    date: "6 September",
    title: "Janmashtami Celebration",
    description: "Cultural celebration featuring dahi handi, devotional music, decorations, and community participation.",
  },
  {
    id: 7,
    year: 2023,
    date: "8 November",
    title: "Workshop on Git & GitHub",
    description: "Practical introduction to Git and GitHub covering version control, repositories, and collaboration.",
  },
  {
    id: 8,
    year: 2023,
    date: "29 November",
    title: "Expert Talk on Web Dev",
    description: "Expert session on website and web application development, industry tools, and current practices.",
  },
  {
    id: 9,
    year: 2022,
    date: "29 November",
    title: "Expert Talk on Web Dev",
    description: "Focused on web technologies, development practices, and industry trends for students' technical knowledge.",
  },
  {
    id: 10,
    year: 2021,
    date: "9 March",
    title: "C Programming Workshop",
    description: "Practical C programming workshop emphasizing logic building, coding challenges, and fundamentals.",
  },
  {
    id: 11,
    year: 2021,
    date: "3 October",
    title: "Flutter Workshop",
    description: "Introduction to Flutter for cross-platform mobile application development using a single codebase.",
  },
  {
    id: 12,
    year: 2021,
    date: "21 November",
    title: "Tic Tech Toe",
    description: "Interactive coding activity where participants built and played the Tic Tac Toe game.",
  },
  {
    id: 13,
    year: 2020,
    date: "26 April",
    title: "Expert Talk on C#",
    description: "Covered C# programming, object-oriented concepts, and application development using the .NET framework.",
  },
  {
    id: 14,
    year: 2020,
    date: "1 August",
    title: "Expert Talk on Cloud",
    description: "Introduction to cloud technologies, deployment models, service architectures, and scalability.",
  },
  {
    id: 15,
    year: 2020,
    date: "11 November",
    title: "Expert Talk on Cyber Security",
    description: "Awareness session on cybersecurity, ethical hacking, threat landscapes, and CTF-based practices.",
  },
];

const yearsAsc = [...new Set(events.map((e) => e.year))].sort((a, b) => a - b);

const NODE_SPACING = 200;
const SVG_HEIGHT = 160;
const Y_CENTER = 80;

const arcDefs = [
  { dy1: -55, dy2: -35 },
  { dy1: 45, dy2: 65 },
  { dy1: -40, dy2: -60 },
  { dy1: 50, dy2: 30 },
  { dy1: -65, dy2: -45 },
  { dy1: 35, dy2: 55 },
];

function buildArcPath(x1: number, x2: number, dy1: number, dy2: number): string {
  const midX = (x1 + x2) / 2;
  return `M ${x1} ${Y_CENTER} C ${midX} ${Y_CENTER + dy1}, ${midX} ${Y_CENTER + dy2}, ${x2} ${Y_CENTER}`;
}

function PaperPlaneSvg({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <path
        d="M4 32L58 8L42 56L32 36L4 32Z"
        fill="var(--primary-red)"
        stroke="#fff"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 36L58 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M28 38L24 56"
        stroke="var(--accent-yellow)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path
        d="M34 36L42 52"
        stroke="var(--accent-yellow)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

const EXHAUST_SYMBOLS = "@#$%^&*(){}[]<>!?;:~+=/|\\";
const EXHAUST_COUNT = 35;

function seededRandom(seed: number) {
  let x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function generateExhaust(totalDuration: number) {
  return Array.from({ length: EXHAUST_COUNT }, (_, i) => {
    const r1 = seededRandom(i * 7 + 1);
    const r2 = seededRandom(i * 13 + 3);
    const r3 = seededRandom(i * 19 + 5);
    const r4 = seededRandom(i * 23 + 7);
    const r5 = seededRandom(i * 31 + 11);

    const distancePct = (i / EXHAUST_COUNT) * 100;
    const delay = 0.3 + (distancePct / 100) * totalDuration;
    const symbol = EXHAUST_SYMBOLS[Math.floor(r1 * EXHAUST_SYMBOLS.length)];
    const driftY = (r2 - 0.5) * 50;
    const driftX = (r3 - 0.5) * 20;
    const rotation = (r4 - 0.5) * 90;
    const size = 0.6 + r5 * 0.7;
    const colors = ["var(--primary-red)", "var(--accent-yellow)", "var(--accent-pink)", "rgba(255,255,255,0.7)"];
    const color = colors[Math.floor(r3 * colors.length)];

    return { i, distancePct, delay, symbol, driftY, driftX, rotation, size, color };
  });
}

export default function UpcomingEvents() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const svgWidth = (yearsAsc.length - 1) * NODE_SPACING;

  const arcPaths = yearsAsc.slice(0, -1).map((_, i) => {
    const x1 = i * NODE_SPACING;
    const x2 = (i + 1) * NODE_SPACING;
    const def = arcDefs[i % arcDefs.length];
    return buildArcPath(x1, x2, def.dy1, def.dy2);
  });

  const fullJourneyPath = arcPaths
    .map((d, i) => (i === 0 ? d : d.replace(/^M [\d.]+ [\d.]+/, "")))
    .join(" ");

  const getArcLength = (i: number) => {
    const len = NODE_SPACING * 1.35;
    return Math.round(len + Math.abs(arcDefs[i % arcDefs.length].dy1) * 0.8);
  };

  const totalDuration = yearsAsc.length * 0.7 + 0.3;

  const exhaust = generateExhaust(totalDuration);

  return (
    <section ref={sectionRef} className={`${styles.section} ${animate ? styles.animate : ""}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Our <span className={styles.highlight}>Journey</span>
        </h2>
        <p className={styles.subtitle}>
          From our first workshop to competitive coding — here&apos;s how far we&apos;ve come.
        </p>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.journey} style={{ width: svgWidth + 80 }}>
          {/* SVG Arc Layer */}
          <svg
            className={styles.arcSvg}
            viewBox={`0 0 ${svgWidth} ${SVG_HEIGHT}`}
            preserveAspectRatio="none"
          >
            {arcPaths.map((d, i) => (
              <path
                key={i}
                className={`${styles.arcPath} ${styles[`arc${i}`]}`}
                d={d}
                strokeDasharray={getArcLength(i)}
                strokeDashoffset={getArcLength(i)}
              />
            ))}
          </svg>

          {/* Plane tracing the path */}
          <div
            className={styles.planeTrack}
            style={{
              ["--journey-path" as string]: `path("${fullJourneyPath}")`,
              ["--trace-duration" as string]: `${totalDuration}s`,
            }}
          >
            <PaperPlaneSvg className={styles.paperPlane} />
          </div>

          {/* Coding symbol exhaust trail */}
          {exhaust.map((p) => (
            <span
              key={p.i}
              className={styles.exhaustParticle}
              style={{
                ["--journey-path" as string]: `path("${fullJourneyPath}")`,
                ["--exhaust-delay" as string]: `${p.delay}s`,
                ["--drift-x" as string]: `${p.driftX}px`,
                ["--drift-y" as string]: `${p.driftY}px`,
                ["--exhaust-rotation" as string]: `${p.rotation}deg`,
                ["--exhaust-size" as string]: `${p.size}rem`,
                ["--exhaust-color" as string]: p.color,
                offsetDistance: `${p.distancePct}%`,
              }}
            >
              {p.symbol}
            </span>
          ))}

          {/* Year Nodes + Cards */}
          {yearsAsc.map((year, i) => {
            const yearEvents = events.filter((e) => e.year === year);
            return (
              <div
                key={year}
                className={`${styles.yearColumn} ${styles[`col${i}`]}`}
                style={{ left: i * NODE_SPACING }}
              >
                <div className={styles.yearDot}>
                  <span className={styles.yearLabel}>{year}</span>
                </div>

                <div className={styles.cardsStack}>
                  {yearEvents.map((event) => (
                    <div key={event.id} className={styles.card}>
                      <span className={styles.cardDate}>{event.date}</span>
                      <h4 className={styles.cardTitle}>{event.title}</h4>
                      <p className={styles.cardDesc}>{event.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
