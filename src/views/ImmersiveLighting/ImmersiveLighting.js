import React from "react";
import ILHomepage from "../../components/IL/ILHomepage.js";
import Portfolio from "../../components/Portfolio/Portfolio.js";
import { FullPage, Slide } from "react-full-page";
import ILSecond from "../../components/IL/ILSecond.js";

const ImmersiveLighting = () => (
  <FullPage>
    <Slide>
      <ILHomepage />
    </Slide>
    <Slide>
      <ILSecond />
    </Slide>
    {/* <Portfolio /> */}
  </FullPage>
);

export default ImmersiveLighting;
