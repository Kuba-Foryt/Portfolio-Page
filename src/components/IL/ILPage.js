import React, { useState, useRef, useEffect } from "react";
import styles from "./ILPage.module.scss";
import Project from "../Project/Project";
import SliderPage1 from "../Slider/SliderPage1";
import SliderPage2 from "../Slider/SliderPage2";
import SliderPage3 from "../Slider/SliderPage3";

const ILPage = (props) => {
  // const container = document.querySelector("#container");
  const container = useRef();

  const changeBcg = (e) => {
    setBackground(getComputedStyle(e.target).backgroundImage);
  };

  const [background, setBackground] = useState("");

  return (
    <>
      <div
        className={
          props.page1
            ? styles.container
            : props.page2
            ? styles.container__second
            : props.page3
            ? styles.container__third
            : styles.container__forth
        }
        id={"container"}
        ref={container}
        style={{ backgroundImage: background }}
      >
        {/* {props.slider === "slider1" ? (
          <SliderPage1 />
        ) : props.slider === "slider2" ? (
          <SliderPage2 />
        ) : props.slider === "slider3" ? (
          <SliderPage3 />
        ) : null} */}

        <div
          className={
            !props.content ? styles.descr__text : styles.descr__textVideo
          }
        >
          <h2 className={styles.descr__text__h2}>{props.title}</h2>
          {props.text}
        </div>
        {props.content !== "videos" ? (
          <section className={styles.descr__images}>
            <Project
              project={false}
              title={props.p1Title}
              text={props.p1Text}
              bcg={props.p1Bcg}
              fn={changeBcg}
              // onClick={(e) => {
              //   console.log(e.target, container);
              // }}
            />
            <Project
              project={false}
              title={props.p2Title}
              text={props.p2Text}
              bcg={props.p2Bcg}
              fn={changeBcg}
              // onClick={(e) => {
              //   setBackground(style.backgroundImage);
              //   console.log(
              //     e.target,
              //     getComputedStyle(e.target).backgroundImage,
              //     container.current,
              //     style.backgroundImage,
              //     background
              //   );
              // }}
            />
            <Project
              project={false}
              title={props.p3Title}
              text={props.p3Text}
              bcg={props.p3Bcg}
              fn={changeBcg}
            />
            <Project
              project={false}
              title={props.p4Title}
              text={props.p4Text}
              bcg={props.p4Bcg}
              fn={changeBcg}
            />
          </section>
        ) : (
          <section className={styles.descr__videos}>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/tFnl9h9DLQ0"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/sEPoDl31Rb0"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/LdkmsQHWkNY"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/KzPqQ78038o"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/KR1LVxboIEE"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/SpI3HZw7-Fg"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/VJUlBcJVVT4"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/Ea3u9aybkFY"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
            <iframe
              width="300"
              height="180"
              src="https://www.youtube.com/embed/CvMMpsR4VXU"
              title="YouTube video player"
              allow="fullscreen"
            ></iframe>
          </section>
        )}
        <p
          className={
            props.footer ? styles.descr__footer : styles.descr__noFooter
          }
        >
          &copy; 2022 kuba foryt
        </p>
      </div>
    </>
  );
};

export default ILPage;
