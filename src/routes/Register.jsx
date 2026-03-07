import { useFormik } from "formik";
import React, { useEffect } from "react";
import { registerSchemaVlidation } from "../util/validationSchema";
import { Button, Card, Container, Form } from "react-bootstrap";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConf: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: registerSchemaVlidation,
    validateOnBlur: true,
    validateOnChange: true,
  });

  useEffect(() => {
    debugger;
    if (!formik.values.firstName) formik.setFieldValue("firstName", "ahmed");
    if (!formik.values.lastName) formik.setFieldValue("lastName", "marey");
  }, []);

  const firstNameHandler = (e) => {
    debugger;
    if (e.target.name === "firstName") {
      if (e.target.value.length > 6) {
        formik.setFieldError("firstName", "Length invalid ");
        return;
      }
    }
    formik.handleChange(e);
  };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: "400px" }} className="p-4 shadow">
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              required
              name="firstName"
              onChange={firstNameHandler}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              isInvalid={formik.touched.firstName && formik.errors.firstName}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              required
              name="lastName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              isInvalid={formik.touched.lastName && formik.errors.lastName}
              autoComplete="off"
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              isInvalid={formik.touched.email && formik.errors.email}
              autoComplete="off"
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

          <Form.Group className="mb-3">
            <Form.Label>Password conf</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              required
              name="passwordConf"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConf}
              isInvalid={
                formik.touched.passwordConf && formik.errors.passwordConf
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.passwordConf}
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

export default Register;
