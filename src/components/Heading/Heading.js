import React from "react";
import styles from "./Heading.module.scss";

const Heading = (props) => (
  <div className={styles.heading}>
    <h3 className={styles.heading__header}>
      {props.text}{" "}
      <span className={styles.heading__header__span}>{props.span}</span>
    </h3>
    <h2>{props.behind}</h2>
  </div>
);

export default Heading;
