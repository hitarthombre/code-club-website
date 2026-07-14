"use client";

import React from "react";
import { ArrowRight, Lock } from "lucide-react";
import styles from "./UpcomingEvents.module.css";

interface EventCard {
  id: number;
  isLocked: boolean;
  image?: string;
  badgeText: string;
  discussionTag: string;
  description: string;
  title: string;
}

const events: EventCard[] = [
  {
    id: 1,
    isLocked: false,
    image: "/photos/event_banner.png",
    title: "Stardance Challenge",
    description: "The largest STEM event of the summer: make anything you want and earn free prizes. In partnership with NASA, AMD, and GitHub.",
    badgeText: "Ends 30 Sept",
    discussionTag: "#stardance",
  },
  {
    id: 2,
    isLocked: true,
    title: "Mystery Event",
    description: "Mystery Event: Coming soon! Stay tuned for the next big adventure. Make things, meet friends, and win prizes.",
    badgeText: "TBA",
    discussionTag: "Discussion opens soon",
  },
  {
    id: 3,
    isLocked: true,
    title: "Upcoming Challenge",
    description: "Upcoming Event: A new challenge awaits. Prepare your tools, teammates, and ideas. Details dropping shortly.",
    badgeText: "TBA",
    discussionTag: "Discussion opens soon",
  },
  {
    id: 4,
    isLocked: true,
    title: "Secret Hackathon",
    description: "Secret Hackathon: A weekend of coding, gaming, and design. Stay alert for the coordinates and dates.",
    badgeText: "TBA",
    discussionTag: "Discussion opens soon",
  },
];

export default function UpcomingEvents() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Imagine a world where <span className={styles.highlight}>you were here:</span>
        </h2>
        <p className={styles.subtitle}>
          Every event below is free, open to any teen, and happening right now. Yes, you can go.
        </p>
      </div>

      <div className={styles.grid}>
        {events.map((event) => (
          <div key={event.id} className={styles.card}>
            <div className={styles.imageContainer}>
              {!event.isLocked && event.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className={styles.image}
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                />
              ) : (
                <div className={styles.questionPlaceholder}>?</div>
              )}
              <span className={`${styles.badge} ${event.isLocked ? styles.badgeLocked : ""}`}>
                {event.badgeText}
              </span>
            </div>

            <div className={styles.content}>
              <p className={styles.description}>{event.description}</p>

              <div className={styles.footer}>
                <span className={styles.discussion}>
                  {event.isLocked ? event.discussionTag : `Join the discussion in ${event.discussionTag}`}
                </span>
                
                {!event.isLocked ? (
                  <button className={styles.btn}>
                    Start now <ArrowRight size={16} />
                  </button>
                ) : (
                  <button className={styles.btnLocked} disabled>
                    <Lock size={14} /> Locked
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
