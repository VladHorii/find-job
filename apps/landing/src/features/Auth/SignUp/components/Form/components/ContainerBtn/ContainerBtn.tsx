import { Google } from "@hs-job/icons";
import { Button } from "@hs-job/ui";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  isSubmitting: boolean;
}

export const ContainerBtn: FC<Props> = ({ isSubmitting }) => {
  return (
    <Container>
      <ButtonStyled
        size={"normal"}
        variant={"contained"}
        type={"submit"}
        disabled={isSubmitting}
      >
        Submit
      </ButtonStyled>

      <ButtonIcon size={"normal"} variant={"outlined"} type={"button"}>
        <Google /> Continue with Google
      </ButtonIcon>
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

const ButtonIcon = styled(ButtonStyled)`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;
`;
