import React from "react";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import Footer from "../components/shared/Footer/Footer";
import Login from "../components/Login/Login";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "react-bootstrap";

const LoginPage = () => {
  const {loading} = useContext(AuthContext);
  return (
    <>
    {loading ? (
      <div className="position-absolute top-50 start-50 text-primary"><Spinner className="" animation="border" /></div>
    ) : (
      <>
      <NavigationBar />
        <Outlet/>
      <Footer />
    </>
    )}
    </>
  );
};

export default LoginPage;
