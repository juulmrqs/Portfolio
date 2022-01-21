import React from "react";
import styled from "styled-components";
import Particle from "../Components/Particle";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particles-home-page">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi I'm <span>Juba</span>
        </h1>
        <p>I'm a software engineer student and this is my website.</p>
        <p>Take a look!</p>
        <div className="icons">
          <a
            href="https://github.com/juulmrqs"
            target="_blank"
            rel="noreferrer"
            className="icon i-github"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/juliano-marques-2195651b4/"
            target="_blank"
            rel="noreferrer"
            className="icon i-linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/juulmrqs/"
            target="_blank"
            rel="noreferrer"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .particles-home-page {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      gap: 1.2rem;
      .icon {
        cursor: pointer;
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        border-radius: 50%;
        transition: all 0.5 ease-in-out;
        &:hover {
          border: 2px solid var(--primary-color);
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #7a007a;
          color: #7a007a;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid #0961b8;
          color: #0961b8;
        }
      }
      .i-instagram {
        &:hover {
          border: 2px solid #df003f;
          color: #df003f;
        }
      }
    }
  }
`;

export default HomePage;
