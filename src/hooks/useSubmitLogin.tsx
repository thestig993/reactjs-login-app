import { useEffect, useState } from "react";
import axiosInstance from "../api/axios-instance";
import Cookies from "js-cookie";

const useSubmitLogin = (data) => {
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (data.username && data.password) {
      submit(data);
    }
  }, [data]);

  const submit = async (data) => {
    try {
      const res = await axiosInstance.post(`/login`, {
        username: data.username,
        password: data.password,
      });
      if (res.data) {
        Cookies.set("token", res.data.token);
        setSuccess(true);
      }
    } catch (err) {
      setSuccess(false);
      setFormError(err.response.data);
    }
  };

  return [success, formError];
};

export default useSubmitLogin;
