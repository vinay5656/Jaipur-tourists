import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1 style={{ fontSize: "2rem", color: "pink" }}>Pink City</h1>
        <p>
          Jaipur was founded on 18th November 1727 by Maharaja Sawai Jai Singh
          II, a Kachawaha Rajput, who ruled from 1699-1744. Initially his
          capital was Amber(Amer). Jaipur Architecture is world wide famous
          because of its technical details and beauty. Jaipur Architecture is
          based on Indian Vastu concepts.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
}

export default Hero;
