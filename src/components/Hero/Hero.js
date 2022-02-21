import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Responsible, detail-oriented, results-driven, and committed engineer
        with a get-it-done, on-me, and high-quality product spirit and a
        demonstrated history of working in the Front-End Development industry
        with about 4 years of building online assets to attract maximum
        engagement and conversions. With a good experience working with teams to
        produce impact, leading-edge software that engages customers and
        delivers require business results.{" "}
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/11fV3lAXuIBCKK9JZfoESjBnXYR0wMZRP/view?usp=sharing")
        }
      >
        Download Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
