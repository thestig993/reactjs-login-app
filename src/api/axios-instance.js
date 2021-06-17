import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.authorization) {
    config.headers["authorization"] = Cookies.get("token");
  }
  return config;
});

axiosInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = process.env.REACT_APP_API_URL;
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
