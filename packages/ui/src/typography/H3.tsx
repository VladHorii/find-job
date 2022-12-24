import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const H3 = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.large};
  line-height: 150%;

  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${MediaQuery.Desktop}px) {
    font-size: 36px;
  }

  @media (min-width: ${MediaQuery.Tablet}px) {
    font-size: 28px;
  }

  @media (min-width: ${MediaQuery.Mobile}px) {
    font-size: 16px;
  }
`;
