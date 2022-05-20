import React from "react";
import styles from "./CheckersHomepage.module.scss";

const CheckersHomepage = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__text}>Checkers</h2>
      <div className={styles.header__gif} />

      <a
        className={styles.header__btn}
        href={"https://kuba-foryt.github.io/Checkers/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Play now!
      </a>
    </header>
  );
};

export default CheckersHomepage;
