import React from "react";
import NavigationBar from "../components/shared/NavigationBar/NavigationBar";
import Footer from "../components/shared/Footer/Footer";
import ChefRecipe from "../components/ChefRecipe/ChefRecipe";

const RecipePage = () => {
  return (
    <>
      <NavigationBar />
      <ChefRecipe />
      <Footer />
    </>
  );
};

export default RecipePage;
