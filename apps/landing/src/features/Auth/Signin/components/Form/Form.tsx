import { Schema_Signin, Signin_DTO } from "@/features";
import { Formik, FormikHelpers } from "formik";
import React from "react";
import { ContainerForm } from "./components";

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
        {(actions) => <ContainerForm actions={actions} />}
      </Formik>
    </>
  );
};
