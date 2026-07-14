"use client";

import React from "react";
import { Globe, X, MessageSquare, Video, Mail, Code } from "lucide-react";
import styles from "./Footer.module.css";

const footerLinks = {
  Explore: [
    "About Code Club",
    "Programs",
    "Hackathons",
    "Clubs",
    "Stickers",
    "Hardware Grants",
  ],
};

const socialIcons = [
  { label: "GitHub", Icon: Code },
  { label: "X (Twitter)", Icon: X },
  { label: "Discord", Icon: MessageSquare },
  { label: "YouTube", Icon: Video },
  { label: "Email", Icon: Mail },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <div
            className={styles.logo}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className={styles.logoChevron}>&lt;</span>ODE
          </div>
          <p className={styles.brandDesc}>
            Code Club is a nonprofit movement of teenagers making cool things together.
            We believe every teen deserves access to free, high-quality tech education.
          </p>
          {/* Social Icons */}
          <div className={styles.socials}>
            {socialIcons.map(({ label, Icon }) => (
              <button key={label} className={styles.socialBtn} aria-label={label} title={label}>
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className={styles.column}>
            <span className={styles.columnTitle}>{title}</span>
            {links.map((link) => (
              <span key={link} className={styles.columnLink}>
                {link}
              </span>
            ))}
          </div>
        ))}
      </div>

      <hr className={styles.divider} />

      {/* Bottom Bar */}
      <div className={styles.bottomRow}>
        <span className={styles.copyright}>
          © {currentYear} Code Club. Made with ❤️ by teens, for teens.
        </span>
        <div className={styles.legalLinks}>
          <span className={styles.legalLink}>Privacy Policy</span>
          <span className={styles.legalLink}>Terms of Service</span>
          <span className={styles.legalLink}>Code of Conduct</span>
          <span className={styles.legalLink}>Open Source</span>
        </div>
      </div>
    </footer>
  );
}
