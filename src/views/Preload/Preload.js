import React from "react";
import styles from "./Preload.module.scss";

export const Preload = () => (
  <div className={styles.preload}>
    <h3 className={styles.preload__name}>kuba foryt</h3>
    <div className={styles.preload__barsWrapper}>
      <div className={styles.preload__barsWrapper__bar1}></div>
      <div className={styles.preload__barsWrapper__bar2}></div>
      <div className={styles.preload__barsWrapper__bar3}></div>
      <div className={styles.preload__barsWrapper__bar4}></div>
      <div className={styles.preload__barsWrapper__bar5}></div>
      <div className={styles.preload__barsWrapper__bar6}></div>
      <div className={styles.preload__barsWrapper__bar7}></div>
      <div className={styles.preload__barsWrapper__bar8}></div>
    </div>
  </div>
);
