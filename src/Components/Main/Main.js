
import React, { useEffect, useState } from "react";
import { getAllRecipes } from "../../Services/Recipes.js";
import RecipeList from "./RecipeList.js";
//import RecipeForm from "./RecipeForm.js";
  
  const Main = () => {
    const [recipes, setRecipes] = useState([]);
  
    
    useEffect(() => {
      getAllRecipes().then((recipes) => {
        setRecipes(recipes);
      });
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
        </div>
      );
    };

    /*
    <RecipeList recipes={recipes} />
    <RecipeForm recipes={recipes} onSubmitClick={clickAlert} />
    */

  export default Main;
  