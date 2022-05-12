import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import bcg1 from "../../assets/images/9.png";
import bcg2 from "../../assets/images/10.png";
import bcg3 from "../../assets/images/il4.jpg";
import bcg4 from "../../assets/images/il8.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const SliderPage3 = () => {
  return (
    <AutoplaySlider
      play={true}
      interval={3000}
      bullets={false}
      fillParent={true}
    >
      <div data-src={bcg1} />
      <div data-src={bcg2} />
      <div data-src={bcg3} />
      <div data-src={bcg4} />
    </AutoplaySlider>
  );
};

export default SliderPage3;
