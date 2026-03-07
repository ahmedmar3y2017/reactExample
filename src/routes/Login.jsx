import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

import { loginSchemaVlidation } from "../util/validationSchema.js";

const emails = ["ahmed@asset.com.eg", "eslam@asset.com.eg"];
const Login = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, formikHelper) => {
      if (emails.includes(formik.values.email)) {
        // formik.setFieldError("email", "email already exists");
        formikHelper.setFieldError("email", "email already exists");
        // stop when email already exists
        return;
      }
      alert(JSON.stringify(values));
    },
    validationSchema: loginSchemaVlidation,
    validateOnBlur: true,
    validateOnChange: true,
    // validateOnMount: true, // when form load
    // validate: (value) => { // validate specific field manually
    //   if (value.email.length > 3) alert("error email ");
    //   console.log(value);
    // },
  });

  useEffect(() => {
    // set value using useeffect when page load by set field value
    if (!formik.values.email)
      formik.setFieldValue("email", "marey@asset.com.eg");
  }, []);
  useEffect(() => {
    // console.log(formik);

    if (Object.keys(formik.errors).length > 0)
      console.log("ERRORS : ", formik.errors);
  }, [formik.errors]);
  const emailHandler = (e) => {
    if (e.target.name === "email") {
      console.log("fire email api ");
    }
    // custom email handler to fire api
    formik.handleChange(e);
    // formik.setFieldValue(e.target.name, e.target.value);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={emailHandler}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>{" "}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              isInvalid={formik.touched.password && formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>{" "}
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
