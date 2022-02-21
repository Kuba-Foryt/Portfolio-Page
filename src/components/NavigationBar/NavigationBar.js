import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./NavigationBar.module.scss";
import AppContext from "../../context";

function NavigationBar() {
  const [whiteLogo, setWhiteLogo] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= height) {
      setWhiteLogo(true);
    } else {
      setWhiteLogo(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <AppContext.Consumer>
      {(context) => (
        <div className={styles.navBar}>
          <div
            className={
              !context.menuOpened
                ? styles.navBar__icon
                : styles.navBar__icon__active
            }
            onClick={(e) => context.toggleMenu(e)}
          >
            <div className={styles.navBar__hamburger}></div>
          </div>
          <h3>
            {" "}
            <Link
              to="/Portfolio-Page/#"
              className={
                whiteLogo
                  ? styles.navBar__logoNameScrolled
                  : styles.navBar__logoName
              }
            >
              kuba foryt
            </Link>
          </h3>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default NavigationBar;
