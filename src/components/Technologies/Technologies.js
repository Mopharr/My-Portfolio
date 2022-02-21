import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = 'tech'>
    <SectionDivider/>
    <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I have worked with a reange of technolories in the Development World From 
        Python(Data Science to Machine Learning) to Web Development(JavaScript and React )</SectionText>
      <List>
        <ListItem>
          <DiReact size = '3rem'/>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with: <br/>
              HTMl <br/>
              CSS <br/>
              Vanila JavaScript<br/>
              React.js <br />
              Vue.js
              
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiPython size = '3rem'/>
          <ListContainer>
            <ListTitle>Python</ListTitle>
            <ListParagraph>
              Experience with: <br/>
              Python Basic <br/>
              Data Analysis <br/>
              Data Visualization <br/>
              Data Science <br/>
              Machine Learning
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>
);

export default Technologies;
