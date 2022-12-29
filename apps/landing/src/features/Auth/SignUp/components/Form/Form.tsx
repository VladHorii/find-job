import { Schema_SignUp, SignUp_DTO } from "@/features";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { ContainerForm } from "./components";

const initDTO_SignIn: SignUp_DTO = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const Form = () => {
  const handleSubmitForm = (
    values: SignUp_DTO,
    actions: FormikHelpers<SignUp_DTO>
  ) => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initDTO_SignIn}
        validationSchema={Schema_SignUp}
        onSubmit={handleSubmitForm}
      >
        {(actions) => <ContainerForm actions={actions} />}
      </Formik>
    </>
  );
};
