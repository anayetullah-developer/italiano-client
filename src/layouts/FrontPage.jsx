import React, { useContext } from "react";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import Footer from "../components/shared/Footer/Footer";
import Home from "../components/Home/Home";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "react-bootstrap";

const FrontPage = () => {
  const {loading} = useContext(AuthContext);
  return (
    <>
    {loading ? (
      <div className="position-absolute top-50 start-50 text-primary"><Spinner className="" animation="border" /></div>
    ) : (
      <>
      <NavigationBar />
        <Home/>
      <Footer />
    </>
    )}
    </>
  );
};

export default FrontPage;
