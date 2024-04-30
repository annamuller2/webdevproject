import React from "react";

//this is the mapping function to get the directions for a recipe
const RecipeDirections = ({ recipe }) => {
  return (
    <div>
      <h2 class="text-xl font-semibold mb-2 mt-2">Directions:</h2>
      <ol class="list-decimal ml-4">
        {recipe && recipe.map(
          (direction) => (<li key={direction}>{direction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDirections;
