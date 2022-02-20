import React, { useState, useEffect } from "react";
import styles from "./NavigationBar.module.scss";
import AppContext from "../../context";

function NavigationBar() {
  const [background, setBackground] = useState(false);
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
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <AppContext.Consumer>
      {(context) => (
        <div
          className={
            background && !context.menuOpened
              ? styles.navBarScrolled
              : styles.navBar
          }
        >
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
          <h3
            className={
              background
                ? styles.navBar__logoNameScrolled
                : styles.navBar__logoName
            }
          >
            kuba foryt
          </h3>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default NavigationBar;
