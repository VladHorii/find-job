import { Google } from "@hs-job/icons";
import { Button } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";

export const ContainerBtn = () => {
  return (
    <Container>
      <ButtonStyled size={"normal"} variant={"contained"}>
        Sign In
      </ButtonStyled>

      <ButtonStyled size={"normal"} variant={"outlined"}>
        <Google /> Continue with Google
      </ButtonStyled>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;
`;

const ButtonStyled = styled(Button)`
  width: 100%;
`;
