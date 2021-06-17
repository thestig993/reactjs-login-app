import React, { useEffect } from "react";
import Cookies from "js-cookie";

const Dashboard = ({ history }) => {
  useEffect(() => {
    if (!Cookies.get("token")) history.push("/login");
  });

  return <p>Dashboard</p>;
};

export default Dashboard;
