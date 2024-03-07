import React, { useEffect, useState } from "react";
import { getAllIngredientsByRecipe, Ingredients } from "../../Services/Common/Ingredients.js";
import RecipeIngredients from "./RecipeIngredients.js";

const Intermediate = ( recipeId ) => {
  
    const [ingredients, setIngredients] = useState([]);
  
    useEffect(() => {
      if (Ingredients.collection.length) {
        setIngredients(Ingredients.collection);
      } else {
        getAllIngredientsByRecipe(recipeId).then((ingredients) => {
        console.log('recipe id:', recipeId);
        console.log('ingredients',ingredients);
          console.log(ingredients);
          setIngredients(ingredients);
        });
      }
    }, [recipeId]);
    
    //This is the html for the page, which contains a header, and the list of recipes in the JSON, and a form for user input
    return (
        <div>
          <RecipeIngredients ingredients={ingredients} />
        </div>
      );
    };

  export default Intermediate;
  