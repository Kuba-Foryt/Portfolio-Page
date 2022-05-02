import React, { useEffect } from "react";
import styles from "./IL.module.scss";
import { useNavigate } from "react-router";
import Project from "../../Project/Project";
import Image1 from "../../../assets/images/1.png";
import Image2 from "../../../assets/images/2.png";
import Image3 from "../../../assets/images/3.png";
import Image4 from "../../../assets/images/4.png";
import Slider1 from "../../../assets/images/il2.png";
import Slider2 from "../../../assets/images/il4.jpg";
import Slider3 from "../../../assets/images/il6.png";
import Slider4 from "../../../assets/images/il7.png";
import Slider5 from "../../../assets/images/il8.png";
import Fade from "react-reveal/Fade.js";
import Zoom from "react-reveal/Zoom.js";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

//Slider

const IL = () => {
  const navigate = useNavigate();
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <article className={styles.il__main}>
        <AutoplaySlider
          play={true}
          interval={3000}
          bullets={false}
          fillParent={true}
        >
          <div data-src={Slider1} />
          <div data-src={Slider2} />
          <div data-src={Slider3} />
          <div data-src={Slider4} />
          <div data-src={Slider5} />
        </AutoplaySlider>
        <div className={styles.il__main__fade} />
        <Zoom>
          <p className={styles.il__main__title}>
            A whole new look at world of the witcher. <br />
            Northern Realms in the most beautiful form!
            <span className={styles.il__main__title__span}>
              {" "}
              A whole new look at world of the witcher. <br />
              Northern Realms in the most beautiful form!
            </span>
          </p>
        </Zoom>
        <Fade>
          <p className={styles.il__main__name}>
            Immersive Lighting
            <span className={styles.il__main__name__span}>
              Immersive Lighting
            </span>
          </p>
        </Fade>
        <Fade>
          <p className={styles.il__main__for}>
            for
            <span className={styles.il__main__for__span}>for</span>
          </p>
        </Fade>
        <Fade>
          <div className={styles.il__main__w3logo} />
        </Fade>
        <a
          className={styles.il__main__btn}
          onClick={(e) => {
            e.preventDefault();
            navigate("/Portfolio-Page/il");
          }}
        >
          Learn more
        </a>
        <a
          className={styles.il__main__nexusBtn}
          href={"https://www.nexusmods.com/witcher3/mods/3953"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download mod
        </a>
      </article>
      <div className={styles.il__separator} />
      <article className={styles.il__second}>
        <div className={styles.il__second__fade} />{" "}
        <Fade>
          <p className={styles.il__second__title}>
            Over 120 000 downloads <br />
            and 3000 endorsments!
            <span className={styles.il__second__title__span}>
              Over 120 000 downloads <br />
              and 3000 endorsments!
            </span>
          </p>
        </Fade>
        <Fade>
          <div className={styles.il__second__container}>
            <Project
              project={"false"}
              title={"Redefines"}
              text={"Reworks lighting to get pleasing effect in all situations"}
              bcg={`url(${Image2})`}
            />{" "}
            <Project
              project={"false"}
              title={"Addicts"}
              text={"Covers all areas from main game and two DLCs"}
              bcg={`url(${Image4})`}
            />{" "}
            <Project
              project={"false"}
              title={"Enhances"}
              text={"Eliminates all vanilla issues "}
              bcg={`url(${Image3})`}
            />{" "}
            <Project
              project={"false"}
              title={"Expands"}
              text={"Adds over 20 weather types, new clouds and effects"}
              bcg={`url(${Image1})`}
            />{" "}
          </div>
        </Fade>
      </article>
    </>
  );
};

export default IL;
