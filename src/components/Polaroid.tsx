"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Polaroid.module.css";

interface PolaroidProps {
  src: string;
  alt: string;
  caption: string;
  rotation?: number; // angle in degrees
  sticker?: "hackclub" | "h" | "star" | "laptop" | "none";
  stickerPosition?: { top?: string; bottom?: string; left?: string; right?: string };
}

export default function Polaroid({
  src,
  alt,
  caption,
  rotation = 0,
  sticker = "none",
  stickerPosition = { top: "-10px", left: "-10px" },
}: PolaroidProps) {
  // Render sticker overlay based on type
  const renderSticker = () => {
    if (sticker === "none") return null;

    const style = { ...stickerPosition };

    if (sticker === "hackclub") {
      return (
        <div className={styles.sticker} style={style}>
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            {/* Playful circular sticker */}
            <circle cx="30" cy="30" r="28" fill="#ec3750" stroke="white" strokeWidth="2.5" />
            <circle cx="30" cy="30" r="24" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3,3" />
            <text
              x="30"
              y="28"
              fill="white"
              fontSize="9"
              fontFamily="var(--font-title)"
              fontWeight="900"
              textAnchor="middle"
            >
              HACK
            </text>
            <text
              x="30"
              y="40"
              fill="white"
              fontSize="9"
              fontFamily="var(--font-title)"
              fontWeight="900"
              textAnchor="middle"
            >
              CLUB
            </text>
          </svg>
        </div>
      );
    }

    if (sticker === "h") {
      return (
        <div className={styles.sticker} style={style}>
          <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
            <rect x="2" y="2" width="41" height="41" rx="8" fill="#ec3750" stroke="white" strokeWidth="2.5" />
            <text
              x="22.5"
              y="30"
              fill="white"
              fontSize="28"
              fontFamily="var(--font-title), sans-serif"
              fontWeight="900"
              textAnchor="middle"
            >
              h
            </text>
          </svg>
        </div>
      );
    }

    if (sticker === "star") {
      return (
        <div className={styles.sticker} style={style}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#ecc94b"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      );
    }

    if (sticker === "laptop") {
      return (
        <div className={styles.sticker} style={style}>
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="22" fill="#4299e1" stroke="white" strokeWidth="1.5" />
            <path d="M6 15h12M8 18h8M10 18v2M14 18v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="7" y="6" width="10" height="7" rx="1" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      className={styles.polaroid}
      style={{ rotate: `${rotation}deg` }}
      whileHover={{
        scale: 1.06,
        rotate: rotation > 0 ? rotation - 2 : rotation + 2,
        zIndex: 50,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
    >
      {renderSticker()}
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.image} src={src} alt={alt} loading="lazy" />
      </div>
    </motion.div>
  );
}
