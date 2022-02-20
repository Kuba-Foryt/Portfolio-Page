import React from "react";
import styles from "./About.module.scss";
import Heading from "../Heading/Heading";
import Project from "../Project/Project";
import BackgroundImage3 from "../../assets/images/swidnik.jpg";

const projects = {
  1: {
    title: "Park Avia in Swidnik",
    text: "Recreation complex: swimming pools, saunas and sport fields",
    link: "",
    bcg: `url(${BackgroundImage3})`,
  },
  2: {
    title: "Immersive Lighting",
    text: "Complete overhaul of Witcher 3 Wild Hunt lighting system",
    link: "https://www.nexusmods.com/witcher3/mods/3953",
  },
};

const about = React.createRef();

const About = () => (
  <>
    <section id="about" ref={about} className={styles.about}>
      <Heading text="about" span="me" behind="resume"></Heading>
      <section className={styles.about__info}>
        <div className={styles.about__info__imgWrapper}>
          <div className={styles.about__info__imgWrapper__image}></div>
        </div>
        <div className={styles.about__me}>
          <h2 className={styles.about__me__name}>My name's Kuba</h2>
          <p className={styles.about__me__text}>
            I'm an
            <span className={styles.about__me__text__span}> engineer</span>,
            Witcher 3 Wild Hunt
            <span className={styles.about__me__text__span}>
              {" "}
              lighting modder
            </span>{" "}
            and possionate{" "}
            <span className={styles.about__me__text__span}>
              Front End Developer{" "}
            </span>
            !
          </p>
        </div>
      </section>
      <section className={styles.about__work}>
        <section className={styles.about__work__text}>
          <h2 className={styles.about__work__text__title}>What's my job?</h2>
          <p>
            I work as{" "}
            <span className={styles.about__work__text__span}>
              contruction engineer
            </span>{" "}
            in{" "}
            <span className={styles.about__work__text__span}>WARBUD S.A</span>,
            one of the biggest construction companies in Poland, which realises
            both public and private investments. My job is to{" "}
            <span className={styles.about__work__text__span}>
              lead subcontractors and employees
            </span>{" "}
            to construct correctly with regard to technical knowledge, building
            health and safety regulations, succeeding for the least possible
            amount of money in the shortest possible time.
          </p>
        </section>
        <Project
          title={projects[1].title}
          text={projects[1].text}
          link={projects[1].link}
          bcg={projects[1].bcg}
        />
      </section>
    </section>
  </>
);
export default About;
