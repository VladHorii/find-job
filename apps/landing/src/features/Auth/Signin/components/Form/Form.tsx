import { Schema_SignIn, SignIn_DTO } from "@/features";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { ContainerForm } from "./components";

const initDTO_SignIn: SignIn_DTO = {
  email: "",
  password: "",
  remember: false,
};

export const Form = () => {
  const handleSubmitForm = (
    values: SignIn_DTO,
    actions: FormikHelpers<SignIn_DTO>
  ) => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initDTO_SignIn}
        validationSchema={Schema_SignIn}
        onSubmit={handleSubmitForm}
      >
        {(actions) => <ContainerForm actions={actions} />}
      </Formik>
    </>
  );
};
