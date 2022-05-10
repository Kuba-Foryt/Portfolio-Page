import React from "react";
import styles from "./Header.module.scss";
import Social from "../Social/Social";

import Fade from "react-reveal/Fade.js";
class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <Fade>
          <h2 className={styles.header__text}>welcome to my world!</h2>
        </Fade>
        <Social header="true" />
        <div className={styles.header__fade}></div>
      </header>
    );
  }
}

export default Header;
