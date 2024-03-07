import React from "react";

//this is the mapping function to get the directions for a recipe
const RecipeDirections = ({ recipe }) => {
  return (
    <div>
      Directions:
      <ol>
        {recipe && recipe.map(
          (direction) => (<li key={direction}>{direction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDirections;
