import React from "react";

//This is the recipe ingredients mapping
const RecipeIngredients = ({ ingredients }) => {
  return (
    <div>
      <h2 class="text-xl font-semibold mb-2 mt-2">Ingredients:</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.get("amount")} {ingredient.get("unit")} {ingredient.get("name")}
            {ingredient.get("detail") && `, ${ingredient.get("detail")}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
