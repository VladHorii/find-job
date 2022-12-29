import { Logo, P1 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const Title = () => {
  return (
    <Container>
      <P1>Let`s start with</P1>
      <Logo onClick={() => alert("Move to main page")} />
      <P1>!</P1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;
