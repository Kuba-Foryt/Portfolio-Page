import React from "react";
import styles from "./Skill.module.scss";

const Skill = (props) => {
  return (
    <div className={styles.skills__container__skill}>
      <div className={styles.skills__container__skill__image}>
        <div className={styles.skills__container__skill__image__icon}>
          {props.icon}
        </div>
      </div>
    </div>
  );
};

export default Skill;
