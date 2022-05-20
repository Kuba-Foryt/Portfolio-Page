import React from "react";
import ILHomepage from "../../components/IL/ILHomepage.js";
import { FullPage, Slide } from "react-full-page";
import ILPage from "../../components/IL/ILPage.js";

import pagesContent from "../../components/IL/PagesContent.js";

const ImmersiveLighting = () => (
  <FullPage>
    <Slide>
      <ILHomepage />
    </Slide>
    {pagesContent.map(
      ({
        title,
        text,
        p1Title,
        p1Text,
        p1Bcg,
        p2Title,
        p2Text,
        p2Bcg,
        p3Title,
        p3Text,
        p3Bcg,
        p4Title,
        p4Text,
        p4Bcg,
        page1,
        page2,
        page3,
        content,
        footer,
      }) => {
        return (
          <Slide key={title}>
            <ILPage
              title={title}
              text={text}
              p1Title={p1Title}
              p1Text={p1Text}
              p1Bcg={p1Bcg}
              p2Title={p2Title}
              p2Text={p2Text}
              p2Bcg={p2Bcg}
              p3Title={p3Title}
              p3Text={p3Text}
              p3Bcg={p3Bcg}
              p4Title={p4Title}
              p4Text={p4Text}
              p4Bcg={p4Bcg}
              page1={page1}
              page2={page2}
              page3={page3}
              content={content}
              footer={footer}
            />
          </Slide>
        );
      }
    )}
  </FullPage>
);

export default ImmersiveLighting;
