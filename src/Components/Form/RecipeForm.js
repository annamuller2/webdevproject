import React from "react";
import ImageForm from "./ImageForm";

//This is the user input component with an event binding on the submit button
const RecipeForm = ({ ingredientRows, 
  directionRows, 
  onIngredientChange, 
  onDirectionChange,
  onAddIngredientRow,
  onAddDirectionRow,
  onSubmitClick 
 }) => {
  return(
    <div>
      <hr />
      <h2>Add a Recipe</h2>
      <form action="#" onSubmit={onSubmit}>
      <div>
      <p>
          {/* Recipe title text input */}
          <label> Recipe Name: </label>
          <input type="text" name="recipeName" />
        </p>
      <p>Select the recipe type:</p>
      <select name="type" id="type">
        <option value="appetizer">Appetizer</option>
        <option value="mainDish">Main Dish</option>
        <option value="sideDish">Side Dish</option>
        <option value="snack">Snack</option>
        <option value="dessert">Dessert</option>
        <option value="other">Other</option>
      </select>
      <br/> <br/>
      <p>Ingredients:</p>
        {ingredientRows.map((row, index) => (
          <div key={index}>
            <label>Amount: </label>
            <input
              type="text"
              name="amount"
              placeholder="2"
              value={row.amount}
              onIngredientChange={(e) => onIngredientChange(e, index)}
            />
            <label>Unit: </label>
            <input
              type="text"
              name="unit"
              placeholder="cups"
              value={row.unit}
              onIngredientChange={(e) => onIngredientChange(e, index)}
            />
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="brown sugar"
              value={row.name}
              onIngredientChange={(e) => onIngredientChange(e, index)}
            />
            <label>Description: </label>
            <input
              type="text"
              name="detail"
              placeholder="packed"
              value={row.detail}
              onIngredientChange={(e) => onIngredientChange(e, index)}
            />
          </div>
        ))}
        <button onClick={onAddIngredientRow}>Add Row</button>
        <br/> <br/>


    <p>Directions:</p>
        {directionRows.map((row, index) => (
          <div key={index}>
            <label>Direction: </label>
            <input
              type="text"
              name="direction"
              placeholder="Combine ingredients in large mixing bowl."
              value={row.direction}
              onDirectionChange={(e) => onDirectionChange(e, index)}
            />
          </div>
        ))}
        <button onClick={onAddDirectionRow}>Add Row</button>
        <br/> <br/>
        <ImageForm/>
        <button type="submit" onClick={onSubmitClick}>Submit</button>
      </div>
      </form>
    </div>
  );
};

export default RecipeForm;


