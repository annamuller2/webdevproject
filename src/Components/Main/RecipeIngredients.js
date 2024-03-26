import React from "react";

//This is the recipe ingredients mapping
const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      Ingredients:
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.get("amount")} {ingredient.get("unit")} {ingredient.get("name")}, {ingredient.get("detail")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
