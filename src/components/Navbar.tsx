"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      {/* <CODE Logo: yellow chevron + white text ODE */}
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className={styles.logoChevron}>&lt;</span>ODE
      </div>

      <nav className={styles.nav}>
        <ul className={styles.linksList}>
          <li className={styles.linkItem}>
            About <ChevronDown className={styles.dropdownIcon} />
          </li>
          <li className={styles.linkItem}>Programs</li>
          <li className={styles.linkItem}>Clubs</li>
          <li className={styles.linkItem}>Hackathons</li>
          <li className={styles.linkItem}>
            Resources <ChevronDown className={styles.dropdownIcon} />
          </li>
          <li className={styles.linkItem}>Donate</li>
        </ul>

        {/* Call to Action Button */}
        <button className={styles.ctaBtn}>Join the community</button>

        {/* Mobile Menu Toggle Button */}
        <button className={styles.mobileMenuBtn} aria-label="Toggle navigation menu">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}

