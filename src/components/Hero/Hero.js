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
        I am an astute Software Engineer ( Frontend mainly ) with 4+ years of professional
        experience building responsive websites and web application designs from
        concept through to deployment helping companies create and maintain a
        better code base for reusability. I can highly adapt to a continuous
        learning environment and eager to tackle complex problems which
        maximizes productivity.{" "}
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1IQz0ICDz4LcSo3oUqy9Xd577nOu8LB92/view?usp=sharing")
        }
      >
        Download Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
