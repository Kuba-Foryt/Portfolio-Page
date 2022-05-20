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

const pagesContent = [
  {
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
    page1: true,
    page2: false,
    page3: false,
    content: null,
    footer: false,
  },
  {
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
    page1: false,
    page2: true,
    page3: false,
    content: null,
    footer: false,
  },
  {
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
    page1: false,
    page2: false,
    page3: true,
    content: null,
    footer: false,
  },
  {
    title: "videos",
    text: null,
    p1Title: null,
    p1Text: null,
    p1Bcg: null,
    p2Title: null,
    p2Text: null,
    p2Bcg: null,
    p3Title: null,
    p3Text: null,
    p3Bcg: null,
    p4Title: null,
    p4Text: null,
    p4Bcg: null,
    page1: false,
    page2: false,
    page3: false,
    content: "videos",
    footer: true,
  },
];

export default pagesContent;
