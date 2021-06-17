import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create();

const getTokenFromCookie = () => {
  const cookieToken = Cookies.get("token");
  if (cookieToken) {
    const parsedToken = JSON.parse(cookieToken);
    return parsedToken.accessToken;
  }
  return null;
};

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization && getTokenFromCookie()) {
    config.headers["Authorization"] = "Bearer " + getTokenFromCookie();
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
