import React from "react";

//This is the user input component with an event binding on the submit button
const RecipeForm = ({ recipes, onSubmitClick }) => {
  return(
    <div>
      <hr />
      <h2>Add a Recipe</h2>
      <form action="#">
        <p>
          {/* Recipe title text input */}
          Recipe Name:
          <input type="text" name="recipeName" />
        </p>
        {/* Radio Buttons */}
        <p>Please select the recipe type:</p>
        <div>
          <p><input type="radio" name="type" value="mainDish" />Main Dish</p>
          <p><input type="radio" name="type" value="sideDish" />Side Dish</p>
          <p><input type="radio" name="type" value="appetizer" />Appetizer</p>
          <p><input type="radio" name="type" value="dessert" />Dessert</p>
        </div>
        {/* Submit button */}
        <input
          type="submit"
          name="submit"
          value="Submit"
          onClick={onSubmitClick}
        />
      </form>
    </div>
  );
};

export default RecipeForm;