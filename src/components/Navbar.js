import React from "react";
import logo from "../images/Jaipur.svg";
import { pageLinks, socialLinks } from "../data";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pageLink) => {
            return (
              <li key={pageLink.id}>
                <a href={pageLink.href} className="nav-link">
                  {pageLink.text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* <li>
            <a href="#home" className="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              {" "}
              tours
            </a>
          </li>
         */}

        <ul className="nav-icons">
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
      </div>
    </nav>
  );
}

export default Navbar;
