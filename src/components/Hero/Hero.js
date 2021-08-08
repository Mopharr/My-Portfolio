import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
       I am a Money Stack Developer with 2 years experience in Front-End Developement(HTML, CSS, JavaScript(React.js)), 
       3 years experience with python(Data Science and Machine Learning)
        and a Freelancer building online Visibility and Credibility to help increase Sales.
      </SectionText>
      <Button onClick = {() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;