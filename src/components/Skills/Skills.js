import React from "react";
import styles from "./Skills.module.scss";
import Heading from "../Heading/Heading";
import Skill from "./Skill/Skill";

import Fade from "react-reveal/Fade.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const content = [
  { icon: <FontAwesomeIcon icon={faHtml5} />, title: "HTML" },
  { icon: <FontAwesomeIcon icon={faCss3} />, title: "CSS" },
  { icon: <FontAwesomeIcon icon={faSass} />, title: "SASS" },
  { icon: <FontAwesomeIcon icon={faJs} />, title: "JAVASCRIPT" },
  { icon: <FontAwesomeIcon icon={faReact} />, title: "REACT" },
  { icon: <FontAwesomeIcon icon={faNode} />, title: "NODE JS" },
];

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Heading text="my" span="abilities" behind="skills" />
      <Fade>
        <div className={styles.skills__container}>
          {content.map(({ icon, title }) => {
            return <Skill key={title} icon={icon} title={title} />;
          })}
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
