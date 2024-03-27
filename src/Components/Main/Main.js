
import React, { useEffect, useState } from "react";
import { getAllRecipes, Recipes } from "../../Services/Common/Recipes.js";
import { getAllIngredients, Ingredients } from "../../Services/Common/Ingredients.js";
import RecipeList from "./RecipeList.js";
import AuthLogout from "../Auth/AuthLogout.js"
//import RecipeForm from "./RecipeForm.js";
  
  const Main = () => {
    const [recipes, setRecipes] = useState([]);
  
  
    useEffect(() => {
      if (Recipes.collection.length) {
        setRecipes(Recipes.collection);
      } else {
        getAllRecipes().then((recipes) => {
          console.log(recipes);
          setRecipes(recipes);
        });
      }
    }, []);

    function clickAlert() {
      alert("Submission received!");
    }
  
    //This is the html for the page, which contains a header, and the list of recipes in the JSON, and a form for user input
    return (
        <div>
          <h1>Digital Cookbook</h1>
          Welcome to your personalized digital cookbook!
          <RecipeList recipes={recipes} />
          <AuthLogout/>
        </div>
      );
    };

  export default Main;
  