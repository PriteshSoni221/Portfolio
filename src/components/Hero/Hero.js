import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Pritesh Soni <br />
          MERN Stack Developer
        </SectionTitle>
        <SectionText>
          A highly motivated student with a hunger for skills and knowledge in
          the domain of computer science, especially web development.
        </SectionText>
        {/* <Button>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
