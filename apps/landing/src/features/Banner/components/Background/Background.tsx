import { Cash, Email, Globe, Laptop, Puzzle, Search } from "@hs-job/icons";
import React from "react";
import styled from "styled-components";

export const Background = () => {
  return (
    <Container>
      <div>
        <Globe />
        <Email />
        <Puzzle />
        <Cash />
        <Laptop />
        <Search />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;

  & div {
    height: 100%;
    position: relative;
  }

  & svg {
    position: absolute;
    opacity: 0.4;

    @media (min-width: 500px) {
      width: 40px;
      height: 40px;
    }

    @media (min-width: ${(props) => props.theme.mediaQuery.tablet}px) {
      width: 60px;
      height: 60px;
    }

    @media (min-width: ${(props) => props.theme.mediaQuery.desktop}px) {
      width: 80px;
      height: 80px;
    }
  }

  & div svg:nth-child(1) {
    top: 5%;
    left: 20%;
  }

  & div svg:nth-child(2) {
    top: 5%;
    right: 20%;
  }

  & div svg:nth-child(3) {
    top: 40%;
    left: 5%;
  }

  & div svg:nth-child(4) {
    top: 40%;
    right: 5%;
  }

  & div svg:nth-child(5) {
    bottom: 10%;
    left: 10%;
  }

  & div svg:nth-child(6) {
    bottom: 10%;
    right: 10%;
  }
`;
