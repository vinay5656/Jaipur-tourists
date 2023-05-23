import React from "react";
import { pageLinks, socialLinks } from "../data";

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} rel="noreferrer" className="footer-link">
                {pageLink.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          return (
            <li key={socialLink.id}>
              <a
                href={socialLink.href}
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i
                  className={socialLink.icon}
                  style={{ color: "black", fontSize: "1.2rem" }}
                  aria-hidden="false"
                ></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Jaipur travel tours company
        <span id="date">{new Date().getFullYear()}</span>
        <p>Vinay Singh Chouhan</p>
      </p>
    </footer>
  );
}

export default Footer;
