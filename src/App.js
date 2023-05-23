// // ********** set date ************
// // select span
// const date = (document.getElementById('date').innerHTML =
//   new Date().getFullYear())

// // ********** nav toggle ************
// // select button and links
// const navBtn = document.getElementById('nav-toggle')
// const links = document.getElementById('nav-links')
// // add event listener
// navBtn.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

// // ********** smooth scroll ************
// // select links

import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
