import React from "react";
import styles from "./NexusBtn.module.scss";

const NexusBtn = (props) => {
  return (
    <a
      className={
        props.portfolio ? styles.il__main__nexusBtn : styles.il__homepage__btn
      }
      href={"https://www.nexusmods.com/witcher3/mods/3953"}
      target="_blank"
      rel="noopener noreferrer"
    >
      Download mod
    </a>
  );
};

export default NexusBtn;
