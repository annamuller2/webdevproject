import React, { useEffect, useState } from "react";
import { getAllIngredientsByRecipe, Ingredients } from "../../Services/Common/Ingredients.js";
import RecipeIngredients from "./RecipeIngredients.js";

//This is where the recipe id is passed into the function getAllIngredientsByRecipe
//Then the ingredients that are returned are passed into RecipeIngredients

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

    
    //This passes the ingredients to the RecipeIngredients file to be printed 
    return (
      <div>
        <RecipeIngredients ingredients={ingredients} />
      </div>
    );
  };

  export default Intermediate;
  