import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axiosInstance from "../../api/axios-instance";
import TopNavbar from "./TopNavbar/TopNavbar";
import { UserContext } from "../../context";
import classes from "./Dashboard.module.scss";

const Dashboard = ({ history }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (!Cookies.get("token")) {
      history.push("/login");
    } else {
      if (!user.firstName) {
        getUserData();
      }
    }
  });

  const getUserData = async () => {
    try {
      const res = await axiosInstance.get("/user");
      if (res.data) {
        setUser(res.data);
      }
    } catch (err) {}
  };

  return (
    <div>
      <UserContext.Provider value={user}>
        <TopNavbar />
        <h1 className={classes.title}>Welcome {user.firstName}</h1>
      </UserContext.Provider>
    </div>
  );
};

export default Dashboard;
