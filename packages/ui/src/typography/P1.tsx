import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const P1 = styled.p`
  font-size: 15px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};
  line-height: 120%;

  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${MediaQuery.Tablet}px) {
    font-size: 16px;
  }

  @media (min-width: ${MediaQuery.Desktop}px) {
    font-size: 20px;
  }
`;
