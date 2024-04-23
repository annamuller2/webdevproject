  import * as React from 'react';
  
//Recipe Form  
  const RecipeForm = ({ basicRecipeInfo, onChangeHandler, ingredientRows, handleIngredientInputChange, handleAddIngredientRow, directionRows, handleDirectionInputChange, handleAddDirectionRow, handleSubmit, handleImageChange }) => {


  return (
    <div>
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <p>
            {/* Recipe title text input */}
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Recipe Name: </label>
            <input type="text" name="recipeName" value = {basicRecipeInfo.title} onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </p>

          <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select the recipe type:</p>
          <select name="type" id="type" value = {basicRecipeInfo.type} onChange={(e) => onChangeHandler(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="Appetizer">Appetizer</option>
            <option value="Main Dish">Main Dish</option>
            <option value="Side Dish">Side Dish</option>
            <option value="Snack">Snack</option>
            <option value="Dessert">Dessert</option>
            <option value="Other">Other</option>
          </select>
          <br/> <br/>
          <p class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingredients:</p>
            {ingredientRows.map((row, index) => (
              <div key={index}>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount: </label>
                <input
                  type="text"
                  name="amount"
                  placeholder="2"
                  value={row.amount}
                  onChange={(e) => handleIngredientInputChange(e, index)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit: </label>
                <input
                  type="text"
                  name="unit"
                  placeholder="cups"
                  value={row.unit}
                  onChange={(e) => handleIngredientInputChange(e, index)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="brown sugar"
                  value={row.name}
                  onChange={(e) => handleIngredientInputChange(e, index)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description: </label>
                <input
                  type="text"
                  name="detail"
                  placeholder="packed"
                  value={row.detail}
                  onChange={(e) => handleIngredientInputChange(e, index)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            ))}
            <button onClick={handleAddIngredientRow}>Add Row</button>

            <br/> <br/>

          <p >Directions:</p>
            {directionRows.map((row, index) => (
              <div key={index}>
                <label >Direction: </label>
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
            <input type="file" id="profilePhotoFileUpload" onChange={handleImageChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <br/> 
            <button onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </div>
      </form>
    </div>
  );
}

export default RecipeForm;


