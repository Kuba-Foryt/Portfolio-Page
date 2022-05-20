import React from "react";
import styles from "./CheckersPageItem.module.scss";

const CheckersPageItem = (props) => {
  return (
    <article className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: props.bcg }} />
      <p className={styles.text}>{props.text}</p>
    </article>
  );
};

export default CheckersPageItem;
