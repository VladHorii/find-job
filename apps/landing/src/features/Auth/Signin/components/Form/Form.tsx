import { Schema_Signin, Signin_DTO } from "@/features/Auth";
import { Email, Password } from "@hs-job/icons";
import { Checkbox, Input, Label, P2 } from "@hs-job/ui";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import styled from "styled-components";
import { ContainerBtn, ContainerLink } from "./components";

const initDTO_Signin: Signin_DTO = {
  email: "",
  password: "",
  remember: false,
};

export const Form = () => {
  const handleSubmitForm = (
    values: Signin_DTO,
    actions: FormikHelpers<Signin_DTO>
  ) => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initDTO_Signin}
        validationSchema={Schema_Signin}
        onSubmit={handleSubmitForm}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          values,
          errors,
        }) => (
          <ContainerForm onSubmit={handleSubmit}>
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
                onBlur={handleBlur}
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
                onBlur={handleBlur}
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
          </ContainerForm>
        )}
      </Formik>

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
