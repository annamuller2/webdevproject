import React from "react";

//this is the component that gets the ingredients for a recipe
const RecipeIngredients = ({ recipeId }) => {
    return (
      <div>
        <ol>
        {/* NEED TO REWRITE SO THE INGREDIENTS WITH RECIPEID AS RECIPE ARE DISPLAYED */}
          {/* {recipe && recipe.map(
            (ingredient) => (<li key={ingredient}>
            ${ingredient.amount} ${ingredient.unit} ${ingredient.name}
            {/* if there is a special direciton in the recipe, a comma will be concatendated to the ingredient
            The ingredient amount, unit, name, and detail all exist as seperate entities in the JSON 
            ${ingredient.detail ? `, ${ingredient.detail}` : ""}
          </li>
          ))} */}


        </ol>
      </div>
    );
  };

export default RecipeIngredients;