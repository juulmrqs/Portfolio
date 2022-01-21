import React from "react";
import styled from "styled-components";
import resumePic from "../img/resumePic.webp";
import PrimaryButton from "./PrimaryButton";

function AboutSection() {
  return (
    <AboutSectionStyled>
      <div className="left-content">
        <img src={resumePic} alt="" />
      </div>
      <div className="right-content">
        <h3>
          My name is <span>Juliano</span>
        </h3>
        <p className="paragraphy">
          I'm an analisys system student, graduation forecast for the begin of
          2024, my hobbies consists in coding, hikings, camping and play music
          instruments. Right now I'm creating projects and looking for
          internship in web developing.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Service</p>
          </div>
          <div className="info">
            <p>: Juliano Lima Marques</p>
            <p>: 22</p>
            <p>: Brazillian </p>
            <p>: Portuguese/ English/ French </p>
            <p>: Belo Horizonte, Brasil</p>
            <p>: Freelance / Intern </p>
          </div>
        </div>
        <PrimaryButton title={"Download Curriculum"} />
      </div>
    </AboutSectionStyled>
  );
}

const AboutSectionStyled = styled.div`
  margin-top: 4rem;
  margin-left: 4rem;
  display: flex;
  .left-content {
    width: 100%;
    img {
      width: 80%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h3 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        color: var(--white-color);
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
    .about-info {
      display: flex;
      .info-title {
        padding-right: 3rem;
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
        padding: 1rem 0;
      }
    }
    .paragraphy {
      padding: 1rem 0;
    }
  }
`;

export default AboutSection;
