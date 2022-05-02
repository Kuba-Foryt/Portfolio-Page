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

const icons = {
  html: <FontAwesomeIcon icon={faHtml5} />,
  css: <FontAwesomeIcon icon={faCss3} />,
  sass: <FontAwesomeIcon icon={faSass} />,
  js: <FontAwesomeIcon icon={faJs} />,
  react: <FontAwesomeIcon icon={faReact} />,
  node: <FontAwesomeIcon icon={faNode} />,
};

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Heading text="my" span="abilities" behind="skills" />
      <Fade>
        <div className={styles.skills__container}>
          <Skill icon={icons.html} />
          <Skill icon={icons.css} />
          <Skill icon={icons.sass} />
          <Skill icon={icons.js} />
          <Skill icon={icons.react} />
          <Skill icon={icons.node} />
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
