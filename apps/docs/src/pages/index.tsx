import { H1 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

const MyText = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Docs() {
  return (
    <div>
      <MyText>Docs [1]</MyText>
      <H1>Docs [2]</H1>
    </div>
  );
}
