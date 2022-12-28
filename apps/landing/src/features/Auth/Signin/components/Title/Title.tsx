import { Logo, P1 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const Title = () => {
  return (
    <Container>
      <P1>Welcome back to</P1>
      <Logo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
`;
