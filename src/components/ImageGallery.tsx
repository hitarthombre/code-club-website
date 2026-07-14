"use client";

import React from "react";
import styles from "./ImageGallery.module.css";

export default function ImageGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Our community <span className={styles.highlight}>in action:</span>
        </h2>
        <p className={styles.subtitle}>
          Here is a sneak peek into the coding sessions, hackathons, and hardware workshops that happen every day.
        </p>
      </div>

      <div className={styles.galleryGrid}>
        {/* Top: Large Group Photo */}
        <div className={styles.largeImageContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.largeImage}
            src="/photos/hackathon_fun.png"
            alt="Hack Club teens hacking together (group photo)"
            loading="lazy"
          />
        </div>

        {/* Bottom: 4 Images Grid */}
        <div className={styles.smallGrid}>
          <div className={styles.smallImageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.smallImage}
              src="/photos/coding_session.png"
              alt="Coding session snapshot"
              loading="lazy"
            />
          </div>

          <div className={styles.smallImageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.smallImage}
              src="/photos/electronics_workshop.png"
              alt="Electronics hardware workshop snapshot"
              loading="lazy"
            />
          </div>

          <div className={styles.smallImageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.smallImage}
              src="/photos/campfire_gathering.png"
              alt="Campfire gathering chat snapshot"
              loading="lazy"
            />
          </div>

          <div className={styles.smallImageContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.smallImage}
              src="/photos/maker_lab.png"
              alt="Teens working in a maker lab snapshot"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
