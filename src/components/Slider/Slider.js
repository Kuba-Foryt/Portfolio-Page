import React from "react";

import Slider1 from "../../assets/images/il2.png";
import Slider2 from "../../assets/images/il4.jpg";
import Slider3 from "../../assets/images/il6.png";
import Slider4 from "../../assets/images/il7.png";
import Slider5 from "../../assets/images/il8.png";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
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
  );
};

export default Slider;
