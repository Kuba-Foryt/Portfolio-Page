import React from "react";
import Typewriter from "typewriter-effect";
import styles from "./Intro.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom.js";

function Intro() {
  return (
    <section className={styles.intro}>
      <Zoom>
        <div className={styles.intro__img}>
          <section className={styles.intro__img__typing}>
            <div className={styles.intro__img__typing__start}>I'm</div>
            <Typewriter
              options={{
                wrapperClassName: styles.intro__img__typing__typed,
                strings: [
                  "Kuba Foryt",
                  "Web Developer",
                  "Witcher 3 Modder",
                  "Structural Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: 55,
                deleteSpeed: 35,
              }}
            />
          </section>
          <div className={styles.intro__resume}>
            <p className={styles.intro__resume__job}>developer</p>
            <FontAwesomeIcon
              icon={faCode}
              className={styles.intro__resume__job__fa}
            />
            <p className={styles.intro__resume__job}>modder</p>
            <FontAwesomeIcon
              icon={faCode}
              className={styles.intro__resume__job__fa}
            />
            <p className={styles.intro__resume__job}>engineer</p>
          </div>
        </div>
      </Zoom>
    </section>
  );
}

export default Intro;
