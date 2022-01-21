import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--background-light-color-2);
  padding: 0.8rem 2.5rem;
  color: var(--secondary-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &:hover:after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: var(--secondary-color);
    left: 0;
    bottom: 0;
  }
`;

export default PrimaryButton;
