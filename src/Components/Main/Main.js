
import React, { useEffect, useState } from "react";
import { getAllRecipes, Recipes } from "../../Services/Common/Recipes.js";
import RecipeList from "./RecipeList.js";

  
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
  
    //This is the html for the page, which contains a header, and the list of recipes in the JSON, and logout button
    return (
        <div>
          <h1 class="mb-4 mt-6 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" >Digital Cookbook</h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" >Browse recipes from our database!</p>
          <RecipeList recipes={recipes} />
        </div>
      );
    };

  export default Main;
  