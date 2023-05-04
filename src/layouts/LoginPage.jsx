import React from "react";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import Footer from "../components/shared/Footer/Footer";
import Login from "../components/Login/Login";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <NavigationBar/>
        <Outlet/>
      <Footer/>
    </div>
  );
};

export default LoginPage;
