import LoginForm from "./LoginForm";
import { useEffect, useState } from "react";
import { useSubmitLogin } from "../../hooks/";

const Login = ({ history }) => {
  const [loginData, setLoginData] = useState({});
  const [success, formError] = useSubmitLogin(loginData);

  useEffect(() => {
    if (success) history.push("/dashboard");
  }, [success]);

  return (
    <LoginForm formError={formError} handleSubmit={(e) => setLoginData(e)} />
  );
};

export default Login;
