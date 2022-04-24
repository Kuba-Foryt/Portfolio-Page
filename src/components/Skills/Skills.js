import React from "react";
import styles from "./Skills.module.scss";
import Heading from "../Heading/Heading";

import logo from "../../assets/images/jslogo.png";

// Init with default setup

// Init with all options at default setting
// const directionRevealDefault = DirectionReveal({
//   selector: ".skills__container",
//   itemSelector: ".skills__container__skill",
//   animationName: "swing",
//   animationPostfixEnter: "enter",
//   animationPostfixLeave: "leave",
//   enableTouch: true,
//   touchThreshold: 250,
// });

const Skills = () => {
  return (
    <section className={styles.skills}>
      <Heading text="my" span="abilities" behind="skills" />
      <div className={styles.skills__container}>
        <div className={styles.skills__container__skill}>
          <div className={styles.skills__container__skill__image}>1</div>
        </div>
        <div className={styles.skills__container__skill}>
          <div className={styles.skills__container__skill__image}>2</div>
        </div>
        <div className={styles.skills__container__skill}>
          <div className={styles.skills__container__skill__image}>3</div>
        </div>
        <div className={styles.skills__container__skill}>
          <div className={styles.skills__container__skill__image}>4</div>
        </div>
        <div className={styles.skills__container__skill}>
          <div className={styles.skills__container__skill__image}>5</div>
        </div>
        <div className={styles.skills__container__skill}>
          <div className={styles.skills__container__skill__image}>6</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
