import { Email, Password } from "@hs-job/icons";
import { Checkbox, Input, Label, P2, P3 } from "@hs-job/ui";
import React from "react";
import styled from "styled-components";
import { ContainerBtn, ContainerLink } from "./components";

export const Form = () => {
  return (
    <>
      <ContainerForm>
        <Label>
          <ContainerText>
            <Email />
            <P2>Email:</P2>
          </ContainerText>

          <InputStyled placeholder="email..." />
        </Label>

        <Label>
          <ContainerText>
            <Password />
            <P2>Password:</P2>
          </ContainerText>

          <InputStyled placeholder="password..." />
        </Label>

        <Label align={"center"} direction={"row"}>
          <Checkbox />
          <P2>Remember me</P2>
        </Label>

        <ContainerBtn />
      </ContainerForm>

      <ContainerLink />
    </>
  );
};

const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 15px;

  & p {
    color: #000;
  }
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;

  margin-left: 10px;
  margin-bottom: 5px;
  gap: 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const InputStyled = styled(Input)`
  width: 100%;
  min-height: 40px;
`;
