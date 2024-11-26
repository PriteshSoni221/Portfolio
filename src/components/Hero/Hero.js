import React from "react";

import {
  Section,
  SectionSubTitle,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Pritesh Soni
        </SectionTitle>
        <SectionSubTitle center>
          Full-Stack Developer | Aspiring Data Scientist (NLP/ML)
        </SectionSubTitle>
        <SectionText>
          Master's student specializing in Data Science and Engineering with 2 years of experience as a full-stack web developer.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
