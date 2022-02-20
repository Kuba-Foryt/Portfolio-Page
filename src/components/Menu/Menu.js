import React from "react";
import styles from "./Menu.module.scss";
import AppContext from "../../context";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router";

const Menu = () => {
  let navigate = useNavigate();

  return (
    <AppContext.Consumer>
      {(context) => (
        <div
          className={
            !context.menuOpened ? styles.wrapper : styles.wrapper__opened
          }
        >
          <ul className={styles.menu}>
            <li className={styles.menu__list}>
              <a
                className={styles.menu__list__item}
                // href="/"
                onClick={(e) => {
                  e.preventDefault();
                  context.toggleMenu(e);
                  navigate("/Portfolio-Page/");
                }}
              >
                Homepage
              </a>
            </li>
            <li className={styles.menu__list}>
              <a
                className={styles.menu__list__item}
                onClick={(e) => {
                  e.preventDefault();
                  context.toggleMenu(e);
                  navigate("/Portfolio-Page/checkers");
                }}
              >
                Checkers
              </a>
            </li>
            <li className={styles.menu__list}>
              <a
                className={styles.menu__list__item}
                onClick={(e) => {
                  e.preventDefault();
                  context.toggleMenu(e);
                  navigate("/Portfolio-Page/il");
                }}
              >
                Immersive Lighting
              </a>
            </li>
            <li className={styles.menu__list}>
              <a
                className={styles.menu__list__item}
                onClick={(e) => {
                  e.preventDefault();
                  context.toggleMenu(e);
                  navigate("/Portfolio-Page/investments");
                }}
              >
                Building investments
              </a>
            </li>
          </ul>
          <div className={styles.menu__fade}></div>
          <div className={styles.menu__bcg}></div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Menu;
