import * as React from 'react';
import { useState } from "react";
import RecipeForm from './RecipeForm';
import { createDirectionsArray } from './RecipeService';
import { createParseFile } from './RecipeService';
import { createUserRecipe } from "../../Services/Common/UserRecipe.js";
import { createUserIngredient } from "../../Services/Common/UserIngredients.js";

const RecipeHandler = () => {

  //state for the ingredient rows
const [ingredientRows, setIngredientRows] = useState([{ amount: '', unit: '', name: '', detail: '' }]);

//state for the recipe title and type
const [basicRecipeInfo, setBasicRecipeInfo] = useState([]);

//state for the image file
const [imageFile, setImageFile] = useState(null); 

//state for the direction rows
const [directionRows, setDirectionRows] = useState([{ direction: '' }]);

//handler for ingredients
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

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  // Handle submit 
  const handleSubmit = () => {
    console.log("submit success");

    //call the directions and image formatters
    const directions = createDirectionsArray(directionRows);
    const image = createParseFile(imageFile);

    //create the recipe
    createUserRecipe(basicRecipeInfo['recipeName'], basicRecipeInfo['type'], directions, image)
    .then(recipe => {
        // Print the ID of the created recipe
        console.log("Recipe created with ID:", recipe);

        //Create ingredients for recipe
        createUserIngredient(ingredientRows, recipe);
    })
    alert(
      `Recipe successfully submitted!`
    );
    
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
        handleImageChange = {handleImageChange}
      />
    </div>
  );
};

export default RecipeHandler;