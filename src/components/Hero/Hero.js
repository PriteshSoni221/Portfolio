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
          A computer science student with interest in web development, continuously seeking to enhance knowledge and skills in the field.
        </SectionText>
        {/* <Button>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;
