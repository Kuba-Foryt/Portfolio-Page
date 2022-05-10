import React from "react";
import Header from "../../components/Header/Header.js";
import About from "../../components/About/About.js";
import Portfolio from "../../components/Portfolio/Portfolio.js";
import Contact from "../../components/Contact/Contact.js";
import Skills from "../../components/Skills/Skills.js";

import { FullPage, Slide } from "react-full-page";

const Homepage = () => (
  <>
    <Header />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
  </>
);

export default Homepage;
