import React from "react";
import styles from "./Portfolio.module.scss";
import Heading from "../Heading/Heading";
import Project from "../Project/Project";
import BackgroundImage1 from "../../assets/images/checkers2.jpg";
import BackgroundImage2 from "../../assets/images/il.png";
import ILPortfolio from "./ILPortfolio/ILPortfolio";
import Zoom from "react-reveal/Zoom.js";

const projects = {
  1: {
    title: "Checkers",
    text: "Browser game created using HTML, CSS and Javascript",
    link: "https://kuba-foryt.github.io/Checkers/",
    bcg: `url(${BackgroundImage1})`,
  },
  2: {
    title: "Immersive Lighting",
    text: "Complete overhaul of Witcher 3 Wild Hunt lighting system",
    link: "https://www.nexusmods.com/witcher3/mods/3953",
    bcg: `url(${BackgroundImage2})`,
  },
};

const Portfolio = () => {
  return (
    <>
      <section className={styles.portfolio}>
        <Heading text="my" span="portfolio" behind="works" />
        <section className={styles.portfolio__projects}>
          <Zoom>
            <Project
              project={"true"}
              title={projects[1].title}
              text={projects[1].text}
              link={projects[1].link}
              bcg={projects[1].bcg}
            />
          </Zoom>
          <Zoom>
            <Project
              project={"true"}
              title={projects[2].title}
              text={projects[2].text}
              link={projects[2].link}
              bcg={projects[2].bcg}
            />
          </Zoom>
        </section>
        <ILPortfolio />
      </section>
    </>
  );
};

export default Portfolio;
