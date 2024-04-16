import React from "react";
import ImageForm from "./ImageForm";

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
        <ImageForm/>
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


{/* <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
      <p>
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
              onChange={(e) => handleIngredientInputChange(e, index)}
            />
            <label>Unit: </label>
            <input
              type="text"
              name="unit"
              placeholder="cups"
              value={row.unit}
              onChange={(e) => handleIngredientInputChange(e, index)}
            />
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder="brown sugar"
              value={row.name}
              onChange={(e) => handleIngredientInputChange(e, index)}
            />
            <label>Description: </label>
            <input
              type="text"
              name="detail"
              placeholder="packed"
              value={row.detail}
              onChange={(e) => handleIngredientInputChange(e, index)}
            />
          </div>
        ))}
        <button onClick={handleAddIngredientRow}>Add Row</button>
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
              onChange={(e) => handleDirectionInputChange(e, index)}
            />
          </div>
        ))}
        <button onClick={handleAddDirectionRow}>Add Row</button>
        <br/> <br/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div> */}