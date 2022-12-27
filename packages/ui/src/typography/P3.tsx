import { MediaQuery } from "@hs-job/types";
import styled from "styled-components";

export const P3 = styled.p`
  line-height: 155%;
  font-size: 10px;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-style: ${(props) => props.theme.typography.fontStyle};
  font-weight: ${(props) => props.theme.typography.fontWeight.small};

  color: ${(props) => props.theme.palette.common.black};

  @media (min-width: ${MediaQuery.Tablet}px) {
    line-height: 155%;
    font-size: 11px;
  }

  @media (min-width: ${MediaQuery.Desktop}px) {
    line-height: 110%;
    font-size: 14px;
  }
`;
