import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import AboutSection from "../Components/AboutSection";
import Skills from "../Components/Skills";
import Resume from "../Components/Resume";

function AboutPage() {
  return (
    <AboutStyled>
      <Title title={"About Me"} span={"About Me"} />
      <AboutSection />
      <Title title={"Skills"} span={"Skills"} />
      <Skills />
      <Resume />
    </AboutStyled>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
