import React, { useEffect, useState } from "react";
import { getAllUserIngredientsByRecipe, UserIngredients } from "../../Services/Common/UserIngredients.js";
import RecipeIngredients from "../Main/RecipeIngredients.js";

//This is where the recipe id is passed into the function getAllIngredientsByRecipe
//Then the ingredients that are returned are passed into RecipeIngredients

const UserIntermediate = ( recipeId ) => {
  
    const [userIngredients, setUserIngredients] = useState([]);
  
      useEffect(() => {
        if (UserIngredients.collection.length) {
          setUserIngredients(UserIngredients.collection);
        } else {
          getAllUserIngredientsByRecipe(recipeId).then((userIngredients) => {
          console.log('recipe id:', recipeId);
          console.log('ingredients',userIngredients);
          console.log(userIngredients);
          setUserIngredients(userIngredients);
          });
        }
      }, [recipeId]);

    
    //This passes the ingredients to the RecipeIngredients file to be printed 
    return (
      <div>
        <RecipeIngredients ingredients={userIngredients} />
      </div>
    );
  };

  export default UserIntermediate;