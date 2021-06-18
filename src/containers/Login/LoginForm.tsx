import { useState } from "react";
import { Button } from "reactstrap";
import { Container, Row, Col, FormGroup } from "reactstrap";
import classes from "./LoginForm.module.scss";
import axiosInstance from "../../api/axios-instance";
import Cookies from "js-cookie";
import logo from "../../logo.svg";
import { Formik, Form } from "formik";
import Input from "../../components/Input";
import * as Yup from "yup";

const LoginForm = ({ history }) => {
  const [formError, setFormError] = useState("");

  const submit = async ({ username, password }) => {
    try {
      const res = await axiosInstance.post(`/login`, {
        username,
        password,
      });
      if (res.data) {
        Cookies.set("token", res.data.token);
        history.push("/dashboard");
      }
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  const validate = Yup.object({
    username: Yup.string().required("Required username"),
    password: Yup.string().required("Required password"),
  });

  return (
    <div className={classes.login}>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          submit(values);
        }}
      >
        {({ values }) => (
          <Container>
            <Row>
              <Col md="12">
                <div className={classes.formWrapper}>
                  <div className={classes.formBox}>
                    <img className={classes.logo} src={logo} />
                    <p className={classes.formErrorText}>{formError}</p>
                    <Form>
                      <FormGroup>
                        <Input
                          type="text"
                          id="username"
                          name="username"
                          value={values.username}
                          placeholder="Username"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          placeholder="Password"
                        />
                      </FormGroup>
                      <Button>Sign In</Button>
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
