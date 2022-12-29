import * as yup from "yup";

export const Schema_SignUp = yup.object().shape({
  email: yup.string().required("Required").email("Email not valid"),
  password: yup.string().required("Required"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null], "not pasw"),
});
