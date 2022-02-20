import React from "react";
import styles from "./Project.module.scss";

class Project extends React.Component {
  render() {
    return (
      <div
        className={styles.project}
        style={{ backgroundImage: this.props.bcg }}
      >
        <div className={styles.project__content}>
          <h2 className={styles.project__content__title}>{this.props.title}</h2>
          <p className={styles.project__content__text}>{this.props.text}</p>
          <a
            className={styles.project__content__btn}
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  }
}
export default Project;
