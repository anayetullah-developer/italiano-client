import React, { useContext } from "react";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import Footer from "../components/shared/Footer/Footer";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";
import { AuthContext } from "../providers/AuthProvider";

const RecipePage = () => {
  const {loading} = useContext(AuthContext);

  return (
      <>
      <NavigationBar />
        <ChefRecipe/>
      <Footer />
    </>
  );
};

export default RecipePage;
