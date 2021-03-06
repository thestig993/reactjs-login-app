import { Button } from "reactstrap";
import { Container, Row, Col, FormGroup } from "reactstrap";
import classes from "./Login.module.scss";
import logo from "../../logo.svg";
import { Formik, Form } from "formik";
import Input from "../../components/Input";
import * as Yup from "yup";

const LoginForm = ({ handleSubmit, formError }) => {
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
          handleSubmit(values);
        }}
      >
        {({ values }) => (
          <Container>
            <Row>
              <Col md="12">
                <div className={classes.formWrapper}>
                  <div className={classes.formBox}>
                    <img className={classes.logo} src={logo} alt='logo' />
                    <p className={classes.formErrorText}>{formError}</p>
                    <Form className={classes.customForm} data-testid='form'>
                      <FormGroup>
                        <Input
                          data-testid='username'
                          type="text"
                          id="username"
                          name="username"
                          value={values.username}
                          placeholder="Username"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          data-testid='password'
                          type="password"
                          id="password"
                          name="password"
                          value={values.password}
                          placeholder="Password"
                        />
                      </FormGroup>
                      <Button role='button'>Sign In</Button>
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
