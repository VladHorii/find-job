import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const H2 = styled.h2`
  font-size: 20px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.large};
  line-height: 150%;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${MediaQuery.Tablet}px) {
    font-size: 38px;
  }

  @media (min-width: ${MediaQuery.Desktop}px) {
    font-size: 48px;
  }
`;
