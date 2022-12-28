import { Signin_DTO } from "@/features/Auth";
import { Email, Password } from "@hs-job/icons";
import { Checkbox, Input, Label, P2 } from "@hs-job/ui";
import { FormikProps } from "formik";
import React, { FC } from "react";
import styled from "styled-components";
import { ContainerBtn } from "../ContainerBtn";

interface Props {
  actions: FormikProps<Signin_DTO>;
}

export const ContainerForm: FC<Props> = ({ actions }) => {
  const { handleSubmit, handleChange, values, errors, isSubmitting } = actions;

  return (
    <Container onSubmit={handleSubmit}>
      <Label>
        <ContainerText>
          <Email />
          <P2>Email:</P2>
        </ContainerText>

        <InputStyled
          type={"email"}
          name={"email"}
          placeholder="email..."
          onChange={handleChange}
          value={values.email}
        />
      </Label>
      <Label>
        <ContainerText>
          <Password />
          <P2>Password:</P2>
        </ContainerText>

        <InputStyled
          type={"password"}
          name={"password"}
          placeholder="password..."
          onChange={handleChange}
          value={values.password}
        />
      </Label>

      <Label align={"center"} direction={"row"}>
        <Checkbox
          name={"remember"}
          onChange={handleChange}
          value={values.remember}
        />
        <P2>Remember me</P2>
      </Label>

      {errors && <span>{JSON.stringify(errors, null)}</span>}
      <ContainerBtn isSubmitting={isSubmitting} />
    </Container>
  );
};

const Container = styled.form`
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
