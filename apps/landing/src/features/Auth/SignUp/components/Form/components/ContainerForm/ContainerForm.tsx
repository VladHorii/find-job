import { InputPassword } from "@/components";
import { SignUp_DTO } from "@/features";
import { Email, Password } from "@hs-job/icons";
import { Input, Label, P2 } from "@hs-job/ui";
import { FormikProps } from "formik";
import React, { FC, useState } from "react";
import styled from "styled-components";
import { ContainerBtn } from "../ContainerBtn";

interface Props {
  actions: FormikProps<SignUp_DTO>;
}

export const ContainerForm: FC<Props> = ({ actions }) => {
  const { handleSubmit, handleChange, values, errors, isSubmitting } = actions;
  const [passwordType, SetPasswordType] = useState(false);

  const handleClickPasswordType = () => {
    SetPasswordType((prevState) => !prevState);
  };

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

        <InputPassword
          type={"password"}
          name={"password"}
          placeholder="password..."
          onChange={handleChange}
          value={values.password}
          passwordType={passwordType}
          handleClickIcon={handleClickPasswordType}
        />
      </Label>

      <Label>
        <ContainerText>
          <Password />
          <P2>Confirm password:</P2>
        </ContainerText>

        <InputPassword
          type={"password"}
          name={"confirmPassword"}
          placeholder="confirm password..."
          onChange={handleChange}
          value={values.confirmPassword}
          passwordType={passwordType}
          handleClickIcon={handleClickPasswordType}
        />
      </Label>

      {/*{errors && <span>{JSON.stringify(errors, null)}</span>}*/}
      <ContainerBtn isSubmitting={isSubmitting} />
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  flex-direction: column;

  gap: 15px;

  & p {
    color: ${(props) => props.theme.palette.common.black};
  }
`;

const ContainerText = styled.div`
  display: flex;
  align-items: center;

  padding-left: 10px;
  margin-bottom: 5px;
  gap: 5px;
  width: 100%;

  & svg {
    width: 20px;
    height: 20px;
  }
`;

const InputStyled = styled(Input)`
  &.MuiInputBase-root {
    width: 100%;
    min-width: 300px;
  }
`;
