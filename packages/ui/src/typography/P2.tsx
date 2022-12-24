import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const P2 = styled.p`
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};

  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${MediaQuery.Desktop}px) {
    line-height: 120%;
    font-size: 16px;
  }

  @media (min-width: ${MediaQuery.Tablet}px) {
    line-height: 155%;
    font-size: 13px;
  }

  @media (min-width: ${MediaQuery.Mobile}px) {
    line-height: 155%;
    font-size: 12px;
  }
`;