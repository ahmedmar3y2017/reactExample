import * as Yup from "yup";
export const loginSchemaVlidation = Yup.object({
  email: Yup.string().email("Invalid email ").required("email required"),
  password: Yup.string().required("password required"),
});

export const registerSchemaVlidation = Yup.object({
  firstName: Yup.string().required("firstName required"),
  lastName: Yup.string().required("lastName required"),
  email: Yup.string().email("Invalid email ").required("email required"),
  password: Yup.string()
    .min(8, "Password min length 8 chars ")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[0-9]/, "Must contain a number")
    .matches(/[!@#$%^&*]/, "Must contain a special character")
    .required("password required"),
  passwordConf: Yup.string()
    .min(8, "Password min length 8 chars ")
    .required("password required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
