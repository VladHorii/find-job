import * as yup from "yup";

export const Schema_Signin = yup.object().shape({
  email: yup.string().required("Required").email("Email not valid"),
  password: yup.string().required("Required"),
});
