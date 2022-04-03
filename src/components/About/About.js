import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./About.module.scss";
import Heading from "../Heading/Heading";
import Project from "../Project/Project";
import BackgroundImage3 from "../../assets/images/swidnik.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

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

function About() {
  return (
    <>
      <section id="about" className={styles.about}>
        <Heading text="about" span="me" behind="resume"></Heading>
        <section className={styles.about__info}>
          <div className={styles.about__info__imgWrapper}>
            <section className={styles.about__typing}>
              <div className={styles.about__typing__intro}>I'm</div>
              <Typewriter
                options={{
                  wrapperClassName: styles.about__typing__typed,
                  strings: [
                    "Kuba Foryt",
                    "Web Developer",
                    "Witcher 3 Modder",
                    "Structural Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 35,
                }}
              />
            </section>
            <div className={styles.about__resume}>
              <p className={styles.about__resume__job}>developer</p>
              <FontAwesomeIcon
                icon={faCode}
                className={styles.about__resume__job__fa}
              />
              <p className={styles.about__resume__job}>modder</p>
              <FontAwesomeIcon
                icon={faCode}
                className={styles.about__resume__job__fa}
              />
              <p className={styles.about__resume__job}>engineer</p>
            </div>
          </div>
        </section>
        <section className={styles.about__create}>
          <div className={styles.about__create__text}>
            <div className={styles.about__create__text__title}>
              I build value through projects development
            </div>
            <p>
              I come from{" "}
              <span className={styles.about__work__text__span}>Lublin</span>,
              city in Poland and that's the place where I've lived for my whole
              life.{" "}
            </p>
            <p>
              I graduaded{" "}
              <span className={styles.about__work__text__span}>
                {" "}
                Civil Engineering{" "}
              </span>
              at Lublin Polytechnic University with speciality in{" "}
              <span className={styles.about__work__text__span}>
                Building and Engineering Structures.
              </span>
            </p>
            <p>
              I feel like I always had{" "}
              <span className={styles.about__work__text__span}>
                a desire to create memorable things
              </span>
              , which make a change and could be my personal statues that will
              stand the test of time.{" "}
            </p>{" "}
            <p>
              Both in job and in web development I strive to create{" "}
              <span className={styles.about__work__text__span}>
                elegant solutions that suprise and delight users
              </span>
              , while keeping complex technical dependencies in mind.
            </p>
          </div>
          <div className={styles.about__create__imgWrapper}></div>
        </section>

        <section className={styles.about__work}>
          <h2 className={styles.about__work__title}>What's my job?</h2>
          <section className={styles.about__work__text}>
            <Project
              title={projects[1].title}
              text={projects[1].text}
              link={projects[1].link}
              bcg={projects[1].bcg}
            />
            <p className={styles.about__work__text__p}>
              I work as{" "}
              <span className={styles.about__work__text__span}>
                contruction site supervisor
              </span>{" "}
              in{" "}
              <span className={styles.about__work__text__span}>WARBUD S.A</span>
              , one of the biggest construction companies in Poland, which
              realises both public and private investments. My job is to{" "}
              <span className={styles.about__work__text__span}>
                lead subcontractors and employees
              </span>{" "}
              to construct correctly with regard to technical knowledge,
              building health and safety regulations, succeeding for the least
              possible amount of money in the shortest possible time.
            </p>
          </section>
        </section>
      </section>
    </>
  );
}
export default About;
