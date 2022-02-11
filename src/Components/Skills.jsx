import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <InnerLayout>
        <div className="subtitle">
          <h3>
            These are my primary <span>tools</span>{" "}
          </h3>
        </div>
        <div className="skills">
          <ProgressBar title={"HTML"} width={"95%"} text={"95%"} />
          <ProgressBar title={"CSS"} width={"87%"} text={"87%"} />
          <ProgressBar title={"Javascript"} width={"73%"} text={"73%"} />
          <ProgressBar title={"React JS"} width={"94%"} text={"94%"} />
          <ProgressBar title={"Python"} width={"55%"} text={"55%"} />
          <ProgressBar title={"Django"} width={"36%"} text={"36%"} />
          <ProgressBar title={"Postgre"} width={"48%"} text={"48%"} />
          <ProgressBar title={"MySQL"} width={"71%"} text={"71%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .subtitle {
    margin-bottom: 3rem;
    text-align: center;
    font-size: 3rem;
    color: var(--white-color);
    span {
      font-size: 3rem;
      color: var(--primary-color);
    }
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
