"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [sidebarOpen]);

  const navLinks = [
    { label: "About", dropdown: true },
    { label: "Programs", dropdown: false },
    { label: "Clubs", dropdown: false },
    { label: "Hackathons", dropdown: false },
    { label: "Resources", dropdown: true },
    { label: "Donate", dropdown: false },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        {/* <CODE Logo: yellow chevron + white text ODE */}
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className={styles.logoChevron}>&lt;</span>ODE
        </div>

        <nav className={styles.nav}>
          <ul className={styles.linksList}>
            {navLinks.map((link) => (
              <li key={link.label} className={styles.linkItem}>
                {link.label} {link.dropdown && <ChevronDown className={styles.dropdownIcon} />}
              </li>
            ))}
          </ul>

          {/* Call to Action Button */}
          <button className={styles.ctaBtn}>Join the community</button>

          {/* Mobile Hamburger Toggle */}
          <button
            className={styles.mobileMenuBtn}
            aria-label="Toggle navigation menu"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`${styles.backdrop} ${sidebarOpen ? styles.backdropVisible : ""}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar Drawer */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`} aria-label="Mobile navigation">
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <span className={styles.logoChevron}>&lt;</span>ODE
          </div>
          <button
            className={styles.closeBtn}
            aria-label="Close navigation menu"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          <ul className={styles.sidebarLinksList}>
            {navLinks.map((link) => (
              <li
                key={link.label}
                className={styles.sidebarLinkItem}
                onClick={() => setSidebarOpen(false)}
              >
                {link.label}
                {link.dropdown && <ChevronDown className={styles.dropdownIcon} />}
              </li>
            ))}
          </ul>

          <button className={styles.sidebarCtaBtn} onClick={() => setSidebarOpen(false)}>
            Join the community
          </button>
        </nav>
      </aside>
    </>
  );
}
