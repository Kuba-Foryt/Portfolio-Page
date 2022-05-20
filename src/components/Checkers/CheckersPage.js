import React from "react";
import styles from "./CheckersPage.module.scss";
import CheckersPageItem from "./CheckersPageItem";
import Skill from "../Skills/Skill/Skill.js";

import bcg1 from "../../assets/images/checkers2.jpg";
import bcg2 from "../../assets/images/checkers3.JPG";
import bcg3 from "../../assets/images/checkers4.JPG";
import bcg4 from "../../assets/images/checkers5.JPG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";

const technologies = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} />,
    title: "HTML",
  },
  { icon: <FontAwesomeIcon icon={faCss3} />, title: "CSS" },
  {
    icon: <FontAwesomeIcon icon={faJs} />,
    title: "JAVASCRIPT",
  },
];

const CheckersPage = () => {
  return (
    <>
      <section className={styles.about}>
        <h2 className={styles.about__title}>About game</h2>
        <div className={styles.about__sectionsContainer}>
          <CheckersPageItem
            bcg={`url(${bcg1})`}
            text={`Checkers are designed as
        browser game for
        two players that can battle on one computer. It's created using
        HTML, CSS and Javascript.`}
          />
          <CheckersPageItem
            bcg={`url(${bcg2})`}
            text={`Game is fully playable in line with checkers regulations regarding normal pieces, kings or winning conditions`}
          />
          <CheckersPageItem
            bcg={`url(${bcg3})`}
            text={`People not familiar with checkers can read rules section. It's prepared in two languages: English and Polish, which can be selected in any second of game.`}
          />
          <CheckersPageItem
            bcg={`url(${bcg4})`}
            text={`Game was prepared as part of process of developing my programming skills to get better understanding of DOM manipulations and OOP paradygmats.`}
          />
        </div>
      </section>
      <section className={styles.technologies}>
        <h2 className={styles.technologies__title}>Technologies</h2>
        <div className={styles.technologies__container}>
          {technologies.map(({ icon, title }) => {
            return <Skill key={`${title}Checkers`} icon={icon} title={title} />;
          })}
        </div>{" "}
        <p className={styles.technologies__footer}>&copy; 2022 kuba foryt</p>
      </section>
    </>
  );
};

export default CheckersPage;
