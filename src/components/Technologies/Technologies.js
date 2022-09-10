import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { DiFirebase, DiPython, DiReact, DiZend } from "react-icons/di";
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
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a reange of technolories in the Development World From
      Python(Data Science to Machine Learning) to Web Development(HTML, CSS,
      JavaScript(ReactJs,VueJs, NextJs), and Typescript ). Check out some of my
      recent work on GitHub (github.com/Mopharr)
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Language</ListTitle>
          <ListParagraph>
            Experience with: <br />
            JavaScript (ReactJs, NextJs, VueJs, AngularJs)
            <br />
            TypeScript (ReactJs, NextJs, VueJs, AngularJs) <br />
            Python <br />
            Docker <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Skills</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Problem Solving <br />
            Team Management <br />
            Computer Literacy <br />
            Strong Communication <br />
            Creative <br />
            Leadership
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
