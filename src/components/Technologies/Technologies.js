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
  <Section nopadding id="technology">
    <SectionDivider style={{ marginLeft: "1rem" }} />
    <SectionTitle main style={{ marginLeft: "1rem" }}>
      Technologies
    </SectionTitle>
    <div style={{ marginLeft: "2rem" }}>


      <SectionText>
        As a MERN stack developer, I am learning both
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
              Next.js <br />
              Redux <br />
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
    </div>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
