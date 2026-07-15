"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./ImageGallery.module.css";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  codeOverlay: string;
}

const images: GalleryImage[] = [
  {
    src: "/photos/gallery/event-01.jpg",
    alt: "VibeCode101 Workshop",
    caption: "VibeCode101 Workshop",
    codeOverlay: "const vibe = await code();",
  },
  {
    src: "/photos/gallery/event-02.jpg",
    alt: "Coding Session",
    caption: "Dahi Handi Celebration",
    codeOverlay: "git commit -m 'celebrate!'",
  },
  {
    src: "/photos/gallery/event-03.jpg",
    alt: "Group Activity",
    caption: "Team Building Activity",
    codeOverlay: "sudo systemctl start fun",
  },
  {
    src: "/photos/gallery/event-04.jpg",
    alt: "Workshop",
    caption: "Workshop in Progress",
    codeOverlay: "import { knowledge } from 'gsfc';",
  },
  {
    src: "/photos/gallery/event-05.jpg",
    alt: "Event",
    caption: "Interactive Session",
    codeOverlay: "while (learning) { grow(); }",
  },
  {
    src: "/photos/gallery/event-06.jpg",
    alt: "Collaboration",
    caption: "Collaborative Coding",
    codeOverlay: "npm run build --community",
  },
  {
    src: "/photos/gallery/event-07.jpg",
    alt: "WhatsApp Event",
    caption: "Shell Craft Workshop",
    codeOverlay: "bash --create --automate",
  },
  {
    src: "/photos/gallery/event-08.jpg",
    alt: "Group Photo",
    caption: "Debug Duel Competition",
    codeOverlay: "fix(bug) && ship(feature)",
  },
  {
    src: "/photos/gallery/event-09.jpg",
    alt: "Activity",
    caption: "Prompt to Poster",
    codeOverlay: "ai.generate('poster')",
  },
  {
    src: "/photos/gallery/event-10.jpg",
    alt: "Workshop Shot",
    caption: "Expert Talk Session",
    codeOverlay: "console.log('inspired');",
  },
  {
    src: "/photos/gallery/event-11.jpg",
    alt: "Team Work",
    caption: "Git & GitHub Workshop",
    codeOverlay: "push --force-to-main",
  },
  {
    src: "/photos/gallery/event-12.jpg",
    alt: "Final Shot",
    caption: "Clash of Code",
    codeOverlay: "solve(problem).in('O(1)')",
  },
  {
    src: "/photos/gallery/event-13.jpg",
    alt: "Workshop Activity",
    caption: "Interactive Workshop",
    codeOverlay: "for (let i of members) i.learn()",
  },
  {
    src: "/photos/gallery/event-14.jpg",
    alt: "Team Collaboration",
    caption: "Team Collaboration",
    codeOverlay: "merge(branch, 'main')",
  },
  {
    src: "/photos/gallery/event-15.jpg",
    alt: "Group Session",
    caption: "Group Session",
    codeOverlay: "docker compose up --build",
  },
];

export default function ImageGallery() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      setDirection(idx > current ? "next" : "prev");
      setCurrent(idx);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection("next");
    setCurrent((p) => (p + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection("prev");
    setCurrent((p) => (p - 1 + images.length) % images.length);
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((p) => !p);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(next, 3500);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, next]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, togglePlay]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Our community <span className={styles.highlight}>in action</span>
        </h2>
        <p className={styles.subtitle}>
          A peek into the coding sessions, hackathons, and workshops that happen every day.
        </p>
      </div>

      <div className={styles.galleryWrap}>
        {/* Terminal Header Bar */}
        <div className={styles.terminalBar}>
          <div className={styles.terminalDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <span className={styles.terminalTitle}>gallery.exe — Code Club GSFC</span>
          <div className={styles.terminalActions}>
            <span className={styles.imgCounter}>
              [{current + 1}/{images.length}]
            </span>
          </div>
        </div>

        {/* Main Slideshow */}
        <div className={styles.slideshow}>
          {images.map((img, i) => (
            <div
              key={i}
              className={`${styles.slide} ${
                i === current
                  ? direction === "next"
                    ? styles.slideActiveNext
                    : styles.slideActivePrev
                  : styles.slideHidden
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className={styles.slideImage} />

              {/* Code overlay */}
              <div className={styles.codeOverlay}>
                <span className={styles.codeText}>{img.codeOverlay}</span>
              </div>
            </div>
          ))}

          {/* Nav Arrows */}
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className={`${styles.navBtn} ${styles.navNext}`} onClick={next} aria-label="Next">
            ›
          </button>

          {/* Play/Pause */}
          <button className={styles.playBtn} onClick={togglePlay} aria-label="Toggle autoplay">
            {isPlaying ? "❚❚" : "▶"}
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className={styles.thumbStrip}>
          {images.map((img, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt="" className={styles.thumbImg} />
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{
              width: `${((current + 1) / images.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className={styles.floatingSnippets} aria-hidden>
        <span className={`${styles.snippet} ${styles.s1}`}>{"{ code }"}</span>
        <span className={`${styles.snippet} ${styles.s2}`}>{"</>"}</span>
        <span className={`${styles.snippet} ${styles.s3}`}>{"fn main()"}</span>
        <span className={`${styles.snippet} ${styles.s4}`}>{"0 errors"}</span>
        <span className={`${styles.snippet} ${styles.s5}`}>{"> _"}</span>
      </div>
    </section>
  );
}
