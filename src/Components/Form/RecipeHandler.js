import * as React from 'react';
import RecipeForm from './RecipeForm';
import { createDirectionsArray } from './RecipeService';
import { createRecipe } from "../../Services/Common/Recipes.js";
import { createIngredient } from "../../Services/Common/Ingredients.js";

const RecipeHandler = () => {

const [ingredientRows, setIngredientRows] = React.useState([{ amount: '', unit: '', name: '', detail: '' }]);
const [basicRecipeInfo, setBasicRecipeInfo] = React.useState([]);

  const handleIngredientInputChange = (e, index) => {
    const values = [...ingredientRows];
    if (e.target.name === 'name') {
      values[index].name = e.target.value;
    } else if (e.target.name === 'amount') {
      values[index].amount = e.target.value;
    } else if (e.target.name === 'unit') {
      values[index].unit = e.target.value;
    } else {
      values[index].detail = e.target.value;
    }
    setIngredientRows(values);
  };

  const handleAddIngredientRow = () => {
    setIngredientRows([...ingredientRows, { amount: '', unit: '', name: '', detail: '' }]);
  };

  // Handle direction rows 

  const [directionRows, setDirectionRows] = React.useState([{ direction: '' }]);

  const handleDirectionInputChange = (e, index) => {
    const directions = [...directionRows];
      directions[index].direction = e.target.value;
    setDirectionRows(directions);
  };

  const handleAddDirectionRow = () => {
    setDirectionRows([...directionRows, { direction: ''}]);
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value: newValue } = e.target;
    console.log(newValue);

    setBasicRecipeInfo({
      ...basicRecipeInfo,
      [name]: newValue
    });
  };

  // Handle submit 
  const handleSubmit = () => {
    console.log("submit success");
    const directions = createDirectionsArray(directionRows);

    createRecipe("temporary", directions)
    .then(recipe => {
        // Print the ID of the created recipe
        console.log("Recipe created with ID:", recipe);
        createIngredient(ingredientRows, recipe);
    })
    //createIngredient(ingredientRows, therecipe);

    console.log("BELOW IS THE ID");
    console.log(directions);
    console.log(ingredientRows[0].amount);
    //createIngredient(ingredientRows, therecipe);
  };

  return (
    <div>
      <RecipeForm
        basicRecipeInfo = {basicRecipeInfo}
        onChangeHandler = {onChangeHandler}
        ingredientRows = {ingredientRows} 
        handleIngredientInputChange = {handleIngredientInputChange}
        handleAddIngredientRow = {handleAddIngredientRow} 
        directionRows = {directionRows} 
        handleDirectionInputChange = {handleDirectionInputChange}
        handleAddDirectionRow = {handleAddDirectionRow} 
        handleSubmit = {handleSubmit}
      />
    </div>
  );
};

export default RecipeHandler;