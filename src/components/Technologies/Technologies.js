import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="technology">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am pursing MERN stack development. Therefore I am learning both
      Front-end and Back-end Technologies.
    </SectionText>
    <List>
      <ListItem>
        <picture style={{ color: "#fff" }}>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React.js <br />
            Redux <br />
            React-Bootstrap
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture style={{ color: "#fff" }}>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node.js <br />
            express.js <br />
            MongoDB <br />
            MySQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
