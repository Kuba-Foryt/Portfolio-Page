import React from "react";
import styles from "./Portfolio.module.scss";
import Heading from "../Heading/Heading";
import Project from "../Project/Project";
import BackgroundImage1 from "../../assets/images/checkers2.jpg";
import BackgroundImage2 from "../../assets/images/il.png";

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

class Portfolio extends React.Component {
  render() {
    return (
      <section className={styles.portfolio}>
        <Heading text="my" span="portfolio" behind="works" />
        <section className={styles.portfolio__projects}>
          <Project
            title={projects[1].title}
            text={projects[1].text}
            link={projects[1].link}
            bcg={projects[1].bcg}
          />
          <Project
            title={projects[2].title}
            text={projects[2].text}
            link={projects[2].link}
            bcg={projects[2].bcg}
          />
        </section>
      </section>
    );
  }
}

export default Portfolio;
