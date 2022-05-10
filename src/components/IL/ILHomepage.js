import React from "react";
import styles from "./ILHomepage.module.scss";
import { Fade } from "react-reveal";
import NexusBtn from "../Btn/NexusBtn";

const ILHomepage = () => {
  return (
    <header className={styles.header}>
      <Fade>
        <div>
          <h2 className={styles.header__text}>Immersive Lighting</h2>
        </div>
      </Fade>
      <NexusBtn portfolio={false} />
    </header>
  );
};

export default ILHomepage;
