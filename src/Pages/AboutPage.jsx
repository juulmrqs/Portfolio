import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import AboutSection from "../Components/AboutSection";

function AboutPage() {
  return (
    <AboutStyled>
      <Title title={"About Me"} span={"About Me"} />
      <AboutSection />
    </AboutStyled>
  );
}

const AboutStyled = styled.section``;

export default AboutPage;
