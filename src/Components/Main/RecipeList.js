import React from "react";
import RecipeImage from "./RecipeImage.js";
import RecipeDirections from "./RecipeDirections.js";
import RecipeIngredients from "./RecipeIngredients.js";

//Recipe list component, which is a prent component to RecipeImage, RecipeIngrediennts, and RecipeDirections
const RecipeList = ({ recipes }) => {
    return (
      <div>
        <hr />
        <ul>
          {/* Check if recipes is defined before mapping */}
          {recipes && recipes.map((recipe) => (
            <li key={recipe}>
              {/* print the title, image, ingredients, and directions for each recipe */}
              {recipe.title}
              {/* <RecipeImage imageLink={recipe.imageName} />
              <RecipeIngredients recipe={recipe} />
              <RecipeDirections recipe={recipe} /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecipeList;