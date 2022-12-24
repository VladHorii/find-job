import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const H4 = styled.h4`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.normal};

  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${MediaQuery.Desktop}px) {
    line-height: 120%;
    font-size: 24px;
  }

  @media (min-width: ${MediaQuery.Tablet}px) {
    line-height: 150%;
    font-size: 18px;
  }

  @media (min-width: ${MediaQuery.Mobile}px) {
    line-height: 150%;
    font-size: 15px;
  }
`;
