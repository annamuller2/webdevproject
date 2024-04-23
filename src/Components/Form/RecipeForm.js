  import * as React from 'react';
  
//Recipe Form  
  const RecipeForm = ({ basicRecipeInfo, onChangeHandler, ingredientRows, handleIngredientInputChange, handleAddIngredientRow, directionRows, handleDirectionInputChange, handleAddDirectionRow, handleSubmit, handleImageChange }) => {


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen </p>

      <div>
      <p>
          {/* Recipe title text input */}
          <label> Recipe Name: </label>

          <input type="text" name="recipeName" value = {basicRecipeInfo.title} onChange={(e) => onChangeHandler(e)}/>
        </p>
      <p>Select the recipe type:</p>
      <select name="type" id="type" value = {basicRecipeInfo.type} onChange={(e) => onChangeHandler(e)}
>

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
        <input type="file" id="profilePhotoFileUpload" onChange={handleImageChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

    </div>
  );
}

export default RecipeForm;


