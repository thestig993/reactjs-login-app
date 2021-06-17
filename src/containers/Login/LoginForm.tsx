import React, { useState, useEffect } from "react";
import { Button, Input } from "reactstrap";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import classes from "./LoginForm.module.scss";
import axiosInstance from "../../api/axios-instance";
import Cookies from "js-cookie";

const LoginForm = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    setFormError("");
  }, [username, password]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post(`/login`, {
        username: username,
        password: password,
      });
      if (res.data) {
        Cookies.set("token", res.data.token);
        history.push("/dashboard");
      }
    } catch (err) {
      setFormError(err.response.data);
    }
  };

  return (
    <div className={classes.login}>
      <Container>
        <Row>
          <Col md="12">
            <div className={classes.formWrapper}>
              <div className={classes.formBox}>
                <h1 className={classes.title}>Login</h1>
                <p className={classes.formErrorText}>{formError}</p>
                <Form onSubmit={submit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                      className={formError ? classes.inputError : ""}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className={formError ? classes.inputError : ""}
                    />
                  </FormGroup>
                  <Button>Sign In</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
