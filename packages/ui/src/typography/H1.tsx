import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Montserrat", serif;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 150%;

  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: #1d283a;

  @media (min-width: ${MediaQuery.Desktop}px) {
    color: red;
  }
`;
