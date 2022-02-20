import React from "react";
import styles from "./Icon.module.scss";

const Icon = (props) => (
  <div className={styles.icon}>
    <a
      className={
        props.header === "true" ? styles.icon__link : styles.contact__icon__link
      }
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.icon}
    </a>
  </div>
);

export default Icon;
