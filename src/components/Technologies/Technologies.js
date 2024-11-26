import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import { SiPytorch } from "react-icons/si";
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

      <List>
        <ListItem>
          <picture style={{ color: "#fff" }}>
            <DiReact size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Angular <br />
              React.js <br />
              Next.js <br />
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
              JAVA Spring Boot <br />
              express.js <br />
              MongoDB <br />
              PostgresSQL
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <picture style={{ color: "#fff" }}>
            <SiPytorch size="3rem" />
          </picture>
          <ListContainer>
            <ListTitle>ML/NLP</ListTitle>
            <ListParagraph>
              Scikit-Learning <br />
              PyTorch <br />
              NLTK <br />

            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </div>
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;
