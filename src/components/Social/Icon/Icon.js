import React from "react";
import styles from "./Icon.module.scss";
import AppContext from "../../../context";

const Icon = (props) => {
  return (
    <AppContext.Consumer>
      {(context) => (
        <div
          className={
            props.header === "true"
              ? !context.menuOpened
                ? styles.icon
                : styles.iconMenuOpened
              : styles.contact__icon
          }
        >
          <a
            className={
              props.header === "true"
                ? styles.icon__link
                : styles.contact__icon__link
            }
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.icon}
          </a>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Icon;
