import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import classes from "./LoginForm.module.scss";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3333/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Success!");
      } else {
        alert("Failed!");
      }
    });
  };

  return (
    <div className={classes.login}>
      <Container>
        <Row>
          <Col md="12">
            <div className={classes.formWrapper}>
              <div className={classes.formBox}>
                <h1 className={classes.title}>Login</h1>
                <Form onSubmit={submit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
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
