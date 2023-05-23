import React from "react";
import about from "../images/about.jpeg";
import Title from "./Title";

function About() {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={about} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We have been working in this field since 2016 and providing the best
            services to our customers. We don't compromise on our services in
            any aspects to make tourism easy and enjoyable.
          </p>
          <p>
            We have the best-qualified staff and tourist guides to provide every
            kind of comfortable to our customers. We give time to tourists to
            explore every time they visit a tourist place.
          </p>
          <a href="#home" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
}

export default About;
