"use client";

import React from "react";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Polaroid from "@/components/Polaroid";
import ImagineSection from "@/components/ImagineSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import ImageGallery from "@/components/ImageGallery";
import TechSection from "@/components/TechSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <main className={styles.heroSection}>
        {/* Hero columns */}
        <div className={styles.heroGrid}>
          
          {/* Left Column: All 6 polaroids stacked above each other in an overlapping pile */}
          <div className={styles.sideColumn}>
            <div className={styles.polaroidWrapper} style={{ top: "0px", left: "10px", zIndex: 10 }}>
              <Polaroid
                src="/photos/coding_session.png"
                alt="Students coding together"
                caption="making games"
                rotation={-8}
                sticker="hackclub"
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "120px", left: "40px", zIndex: 11 }}>
              <Polaroid
                src="/photos/electronics_workshop.png"
                alt="Students working with hardware"
                caption="debugging circuits"
                rotation={6}
                sticker="h"
                stickerPosition={{ top: "-15px", right: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "240px", left: "0px", zIndex: 12 }}>
              <Polaroid
                src="/photos/campfire_gathering.png"
                alt="Students sitting around a campfire"
                caption="campfire chats"
                rotation={-4}
                sticker="star"
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "360px", left: "50px", zIndex: 13 }}>
              <Polaroid
                src="/photos/hackathon_fun.png"
                alt="Students coding late at a hackathon"
                caption="midnight hackathons"
                rotation={7}
                sticker="laptop"
                stickerPosition={{ top: "-10px", left: "-15px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "480px", left: "-10px", zIndex: 14 }}>
              <Polaroid
                src="/photos/maker_lab.png"
                alt="Students collaborating in a maker space"
                caption="it actually works!"
                rotation={-6}
                sticker="none"
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "600px", left: "30px", zIndex: 15 }}>
              <Polaroid
                src="/photos/coding_session.png"
                alt="Students pair programming"
                caption="pair programming"
                rotation={5}
                sticker="hackclub"
                stickerPosition={{ bottom: "-10px", right: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "720px", left: "10px", zIndex: 16 }}>
              <Polaroid
                src="/photos/campfire_gathering.png"
                alt="Students sitting around a campfire"
                caption="campfire chats"
                rotation={-4}
                sticker="star"
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "840px", left: "40px", zIndex: 17 }}>
              <Polaroid
                src="/photos/hackathon_fun.png"
                alt="Students coding late at a hackathon"
                caption="midnight hackathons"
                rotation={7}
                sticker="laptop"
                stickerPosition={{ top: "-10px", left: "-15px" }}
              />
            </div>
          </div>

          {/* Center Column: Big Title, Subtitle only */}
          <div className={styles.centerColumn}>
            {/* Main title */}
            <h1 className={styles.title}>
              Where{" "}
              <span className={styles.teens}>
                <span className={styles.t_char}>t</span>
                <span className={styles.e1_char}>e</span>
                <span className={styles.e2_char}>e</span>
                <span className={styles.n_char}>n</span>
                <span className={styles.s_char}>s</span>
              </span>{" "}
              make cool stuff.
            </h1>

            {/* Subheading */}
            <p className={styles.subtitle}>
              Hack Club is the world&apos;s largest nonprofit movement of teenagers
              making cool projects.
            </p>

            {/* GSFC University Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.gsfcuniversity.ac.in/public/logo/02-logo.png"
              alt="GSFC University Logo"
              className={styles.universityLogo}
            />
          </div>

          {/* Right Column: Mirror layout of left stacked polaroids */}
          <div className={styles.sideColumnRight}>
            <div className={styles.polaroidWrapper} style={{ top: "0px", right: "10px", zIndex: 10 }}>
              <Polaroid
                src="/photos/coding_session.png"
                alt="Students coding together"
                caption="making games"
                rotation={8}
                sticker="hackclub"
                stickerPosition={{ top: "-10px", right: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "120px", right: "40px", zIndex: 11 }}>
              <Polaroid
                src="/photos/electronics_workshop.png"
                alt="Students working with hardware"
                caption="debugging circuits"
                rotation={-6}
                sticker="h"
                stickerPosition={{ top: "-15px", left: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "240px", right: "0px", zIndex: 12 }}>
              <Polaroid
                src="/photos/campfire_gathering.png"
                alt="Students sitting around a campfire"
                caption="campfire chats"
                rotation={4}
                sticker="star"
                stickerPosition={{ top: "-10px", right: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "360px", right: "50px", zIndex: 13 }}>
              <Polaroid
                src="/photos/hackathon_fun.png"
                alt="Students coding late at a hackathon"
                caption="midnight hackathons"
                rotation={-7}
                sticker="laptop"
                stickerPosition={{ top: "-10px", right: "-15px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "480px", right: "-10px", zIndex: 14 }}>
              <Polaroid
                src="/photos/maker_lab.png"
                alt="Students collaborating in a maker space"
                caption="it actually works!"
                rotation={6}
                sticker="none"
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "600px", right: "30px", zIndex: 15 }}>
              <Polaroid
                src="/photos/coding_session.png"
                alt="Students pair programming"
                caption="pair programming"
                rotation={-5}
                sticker="hackclub"
                stickerPosition={{ bottom: "-10px", left: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "720px", right: "10px", zIndex: 16 }}>
              <Polaroid
                src="/photos/electronics_workshop.png"
                alt="Students working with hardware"
                caption="debugging circuits"
                rotation={-5}
                sticker="star"
                stickerPosition={{ top: "-10px", right: "-10px" }}
              />
            </div>
            <div className={styles.polaroidWrapper} style={{ top: "840px", right: "40px", zIndex: 17 }}>
              <Polaroid
                src="/photos/maker_lab.png"
                alt="Students collaborating in a maker space"
                caption="it actually works!"
                rotation={4}
                sticker="none"
              />
            </div>
          </div>

        </div>
        {/* Peeking raccoon mascot in bottom right */}
        <div className={styles.mascotContainer} onClick={() => alert("Orpheus waves hello! 🦝")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.mascotImage}
            src="/photos/raccoon_mascot.png"
            alt="Hack Club Mascot Raccoon Orpheus peaking"
          />
        </div>
      </main>

      <ImagineSection />
      <UpcomingEvents />
      <ImageGallery />
      <TechSection />
      <Footer />
    </div>
  );
}

