import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

function Resume() {
  const school = <SchoolIcon />;
  const briefcase = <BusinessCenterIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
      <div className="small-title">
        <SmallTitle icon={briefcase} title={'Working Experience'} />
      </div>
        <div className="resume-content">
          <ResumeItem 
              year={'2015 - 2020'} 
              title={'Intern - Full Stack Developer'}
              subTitle={'Instituto e Gestão de Tecnologia da Informática'}
              text={'Developing web system and desktop, using: Python/Flask/Next JS/typescript. Also managing a database.'} />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            date={"2021 - present"}
            title={
              "System Analysis and Development - Universidade Estácio de Sá"
            }
            subTitle={"Currently Higher Course "}
          />
          <ResumeItem
            date={"2019 - 2021"}
            title={
              "Law School - Pontifícia Universidade Católica de Minas Gerais"
            }
            subTitle={"Incompleted Law Course"}
          />
          <ResumeItem
            date={"2015 - 2017"}
            title={"Colégio baião santos"}
            subTitle={"High School"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
    div:last-child {
      .left-content {
        width: 22%;
      }
    }
  }
`;
export default Resume;
