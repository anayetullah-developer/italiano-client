import React, { useContext } from "react";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import Footer from "../components/shared/Footer/Footer";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "react-bootstrap";

const RecipePage = () => {
  const {loading} = useContext(AuthContext);

  return (
     <>
    {loading ? (
      <div className="position-absolute top-50 start-50 text-primary"><Spinner className="" animation="border" /></div>
    ) : (
      <>
      <NavigationBar />
        <ChefRecipe/>
      <Footer />
    </>
    )}
    </>
  );
};

export default RecipePage;
