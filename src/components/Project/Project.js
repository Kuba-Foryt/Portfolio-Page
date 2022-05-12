import React from "react";
import styles from "./Project.module.scss";

const Project = (props) => {
  return (
    <div
      className={
        props.project
          ? styles.project
          : props.projectIL
          ? styles.projectIL
          : styles.iconIL
      }
      style={{ backgroundImage: props.bcg }}
    >
      <div
        className={
          props.project
            ? styles.project__content
            : props.projectIL
            ? styles.projectIL__content
            : styles.iconIL__content
        }
      >
        <h2
          className={
            props.project
              ? styles.project__content__title
              : props.projectIL
              ? styles.projectIL__content__title
              : styles.iconIL__content__title
          }
        >
          {props.title}
        </h2>
        <p
          className={
            props.project
              ? styles.project__content__text
              : props.projectIL
              ? styles.projectIL__content__text
              : styles.iconIL__content__text
          }
        >
          {props.text}
        </p>
        <a
          className={
            props.project
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
