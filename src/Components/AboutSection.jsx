import React from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import ControlledCarousel from "./Carousel";
import curriculo from "../assets/curriculo-juliano-marques.pdf";

function AboutSection() {
  return (
    <AboutSectionStyled>
      <div className="left-content">
        <h3>
          My name is <span>Juliano</span>
        </h3>
        <p className="paragraphy">
          I'm an analisys system student, my graduation forecast is settled for
          the begin of 2024. I started coding when I was in Law School, after, I
          did change my course to be able to work as a Software Engineer. Right
          now I'm creating projects and looking for internship in the web
          developing area.
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
        <a href={curriculo} download>
          <PrimaryButton title={"Curriculum PDF Download"} className="button" />
        </a>
      </div>
      <div className="right-content">
        <h3>
          My <span>Hobbies</span>
        </h3>
        <p className="paragraphy">
          {" "}
          My hobbies consists in coding, hikings, camping, fishing and play
          music instruments.
        </p>
        <ControlledCarousel />
      </div>
    </AboutSectionStyled>
  );
}

const AboutSectionStyled = styled.div`
  @media screen and (max-width: 1213px) {
    flex-direction: column;
  }
  margin: 2rem;
  display: flex;
  .button {
    margin: 0 auto;
  }
  .paragraphy {
    padding: 1rem;
  }
  .right-content {
    margin-top: 2rem;
    width: 100%;
    h3 {
      text-align: center;
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
    }
    img {
      width: 80%;
      object-fit: cover;
    }
  }
  .left-content {
    width: 100%;
    margin-top: 2rem;
    h3 {
      text-align: center;
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
        color: var(--primary-color);
      }
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
      padding: 1rem;
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
  }
`;

export default AboutSection;
