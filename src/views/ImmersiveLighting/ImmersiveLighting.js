import React from "react";
import ILHomepage from "../../components/IL/ILHomepage.js";
import Portfolio from "../../components/Portfolio/Portfolio.js";
import { FullPage, Slide } from "react-full-page";
import ILPage from "../../components/IL/ILPage.js";
import bcg1 from "../../assets/images/3.jpg";
import bcg2 from "../../assets/images/2.jpg";
import bcg3 from "../../assets/images/il3.jpg";
import bcg4 from "../../assets/images/il6.jpg";
import bcg5 from "../../assets/images/5.jpg";
import bcg6 from "../../assets/images/6.jpg";
import bcg7 from "../../assets/images/7.jpg";
import bcg8 from "../../assets/images/il7.jpg";
import bcg9 from "../../assets/images/9.jpg";
import bcg10 from "../../assets/images/10.jpg";
import bcg11 from "../../assets/images/il4.jpg";
import bcg12 from "../../assets/images/il8.jpg";

const pagesContent = {
  1: {
    title: "Immersive Lighting",
    text: "The culmination of my work on lighting system for Witcher 3. It'sprepared as complete overhaul of lighting in base game and two DLCs.",
    p1Title: "Skellige",
    p1Text: "Beautiful and wild northern isles",
    p1Bcg: `url(${bcg2})`,
    p2Title: "Novigrad/Velen",
    p2Text: "Prosperity in the first, the second ruined and gritty",
    p2Bcg: `url(${bcg1})`,
    p3Title: "Toussaint",
    p3Text: "Land of blood and wine",
    p3Bcg: `url(${bcg3})`,
    p4Title: "Kaer Morhen",
    p4Text: "Fortress hidden deep in the mountains",
    p4Bcg: `url(${bcg4})`,
  },
  2: {
    title: "Project purpose",
    text: "Project purpose was to deliver enjoyable product, give fantasy vibe at day and realistic vibe during nights, eliminate ugly lights put into cutscenes, extend weather system in all regions.",
    p1Title: "Day",
    p1Text: "Fantasy style with gorgeus mornigns and evenings",
    p1Bcg: `url(${bcg5})`,
    p2Title: "Night",
    p2Text: "Darker, gritty and atmospheric style of nights",
    p2Bcg: `url(${bcg6})`,
    p3Title: "Cutscenes",
    p3Text: "Realistic cutscenes without harsh transitions",
    p3Bcg: `url(${bcg7})`,
    p4Title: "Weathers",
    p4Text: "System expanded by 20 new weather types",
    p4Bcg: `url(${bcg8})`,
  },
  3: {
    title: "Add-ons",
    text: "It introduces many things not present in vanilla as volumetric clouds in Skellige or new fogFX, but also eliminates environmental light probes in all regions and changes other things I forgot to mention here.",
    p1Title: "Clouds",
    p1Text: "New volumetric clouds from Last Wish Quest",
    p1Bcg: `url(${bcg9})`,
    p2Title: "FogFX",
    p2Text: "Fog used during cloudy weathers",
    p2Bcg: `url(${bcg10})`,
    p3Title: "No fake probes",
    p3Text: "Areas are cleaned from fake lights in all areas",
    p3Bcg: `url(${bcg11})`,
    p4Title: "And more",
    p4Text: "Download to find more!",
    p4Bcg: `url(${bcg12})`,
  },
  4: {
    title: "videos",
    // text: "Few examples how mod looks in action",
  },
};

const ImmersiveLighting = () => (
  <FullPage>
    <Slide>
      <ILHomepage />
    </Slide>
    <Slide>
      <ILPage
        page1={true}
        title={pagesContent[1].title}
        text={pagesContent[1].text}
        p1Title={pagesContent[1].p1Title}
        p1Text={pagesContent[1].p1Text}
        p1Bcg={pagesContent[1].p1Bcg}
        p2Title={pagesContent[1].p2Title}
        p2Text={pagesContent[1].p2Text}
        p2Bcg={pagesContent[1].p2Bcg}
        p3Title={pagesContent[1].p3Title}
        p3Text={pagesContent[1].p3Text}
        p3Bcg={pagesContent[1].p3Bcg}
        p4Title={pagesContent[1].p4Title}
        p4Text={pagesContent[1].p4Text}
        p4Bcg={pagesContent[1].p4Bcg}
      />
    </Slide>
    <Slide>
      <ILPage
        page2={true}
        title={pagesContent[2].title}
        text={pagesContent[2].text}
        p1Title={pagesContent[2].p1Title}
        p1Text={pagesContent[2].p1Text}
        p1Bcg={pagesContent[2].p1Bcg}
        p2Title={pagesContent[2].p2Title}
        p2Text={pagesContent[2].p2Text}
        p2Bcg={pagesContent[2].p2Bcg}
        p3Title={pagesContent[2].p3Title}
        p3Text={pagesContent[2].p3Text}
        p3Bcg={pagesContent[2].p3Bcg}
        p4Title={pagesContent[2].p4Title}
        p4Text={pagesContent[2].p4Text}
        p4Bcg={pagesContent[2].p4Bcg}
      />
    </Slide>
    <Slide>
      <ILPage
        page3={true}
        title={pagesContent[3].title}
        text={pagesContent[3].text}
        p1Title={pagesContent[3].p1Title}
        p1Text={pagesContent[3].p1Text}
        p1Bcg={pagesContent[3].p1Bcg}
        p2Title={pagesContent[3].p2Title}
        p2Text={pagesContent[3].p2Text}
        p2Bcg={pagesContent[3].p2Bcg}
        p3Title={pagesContent[3].p3Title}
        p3Text={pagesContent[3].p3Text}
        p3Bcg={pagesContent[3].p3Bcg}
        p4Title={pagesContent[3].p4Title}
        p4Text={pagesContent[3].p4Text}
        p4Bcg={pagesContent[3].p4Bcg}
      />
    </Slide>
    <Slide>
      <ILPage
        title={pagesContent[4].title}
        // text={pagesContent[4].text}
        content={"videos"}
        footer={true}
      />
    </Slide>
  </FullPage>
);

export default ImmersiveLighting;
