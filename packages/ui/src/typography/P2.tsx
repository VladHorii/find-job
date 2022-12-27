import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const P2 = styled.p`
  font-size: 12px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};

  color: ${(props) => props.theme.palette.common.black};
  line-height: 120%;

  @media (min-width: ${MediaQuery.Tablet}px) {
    font-size: 13px;
  }

  @media (min-width: ${MediaQuery.Desktop}px) {
    font-size: 16px;
  }
`;
