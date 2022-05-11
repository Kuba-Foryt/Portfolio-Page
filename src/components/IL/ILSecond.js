import React from "react";
import styles from "./ILSecond.module.scss";
import Slider from "../Slider/Slider";

const ILSecond = () => {
  return (
    <div className={styles.container}>
      <Slider />
      <div className={styles.text}>
        <div>
          {" "}
          Immersive Lighting is culmination of my work on lighting system for
          Witcher 3. It's prepared as complete overhaul of lighting in base game
          and two DLCs. <br></br>Project purpose was to deliver enjoyable
          product, give fantasy vibe at day and realistic vibe during nights,
          eliminate ugly lights put into cutscenes, extend weather system in all
          regions. It introduces many things not present in vanilla as
          volumetric clouds in Skellige, eliminated environmental light probes
          in all regions and many other things I forgot to mention here.
        </div>
      </div>
    </div>
  );
};

export default ILSecond;
