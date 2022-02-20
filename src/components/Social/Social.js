import React from "react";
import styles from "./Social.module.scss";
import Icon from "./Icon/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const links = {
  youtube: "https://www.youtube.com/channel/UCeb-0MVCRID-nIKXM5CSAew",
  facebook: "https://www.facebook.com/kuba.foryt/",
  github: "https://github.com/Kuba-Foryt",
  linkedin: "https://www.linkedin.com/in/jakub-foryt/",
};

const icons = {
  youtube: <FontAwesomeIcon icon={faYoutube} />,
  facebook: <FontAwesomeIcon icon={faFacebook} />,
  github: <FontAwesomeIcon icon={faGithub} />,
  linkedin: <FontAwesomeIcon icon={faLinkedin} />,
};

class Social extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.header === "true" ? styles.social : styles.footer__social
        }
      >
        <Icon
          icon={icons.linkedin}
          link={links.linkedin}
          header={this.props.header === "true" ? "true" : "false"}
        />
        <Icon
          icon={icons.github}
          link={links.github}
          header={this.props.header === "true" ? "true" : "false"}
        />
        <Icon
          icon={icons.youtube}
          link={links.youtube}
          header={this.props.header === "true" ? "true" : "false"}
        />
        <Icon
          icon={icons.facebook}
          link={links.facebook}
          header={this.props.header === "true" ? "true" : "false"}
        />
      </div>
    );
  }
}

export default Social;
