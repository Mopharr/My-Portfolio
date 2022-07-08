import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 10, text: 'Article about Python and ML', },
  { number: 20, text: 'JavaScript Article', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishment</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
