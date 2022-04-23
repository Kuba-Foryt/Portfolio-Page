import React from "react";
import styles from "./Project.module.scss";

const Project = (props) => {
  return (
    <div
      className={props.project === "true" ? styles.project : styles.projectIL}
      style={{ backgroundImage: props.bcg }}
    >
      <div
        className={
          props.project === "true"
            ? styles.project__content
            : styles.projectIL__content
        }
      >
        <h2
          className={
            props.project === "true"
              ? styles.project__content__title
              : styles.projectIL__content__title
          }
        >
          {props.title}
        </h2>
        <p
          className={
            props.project === "true"
              ? styles.project__content__text
              : styles.projectIL__content__text
          }
        >
          {props.text}
        </p>
        <a
          className={
            props.project === "true"
              ? styles.project__content__btn
              : styles.projectIL__content__btn
          }
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Project;
