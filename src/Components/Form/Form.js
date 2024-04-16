import RecipeForm from "./RecipeForm.js";
import React, { useEffect, useState } from "react";

const Form = () => {
     
    function clickAlert() {
      alert("Submission received!");
    }

     // Handle Ingredient Rows

  const [ingredientRows, setIngredientRows] = useState([{ amount: '', unit: '', name: '', detail: '' }]);

  const onIngredientChangeHandler = (e, index) => {
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

  const onAddIngredientRowHandler = () => {
    setIngredientRows([...ingredientRows, { amount: '', unit: '', name: '', detail: '' }]);
  };

  // Handle direction rows 

  const [directionRows, setDirectionRows] = useState([{ direction: '' }]);

  const onDirectionChangeHandler = (e, index) => {
    const directions = [...directionRows];
      directions[index].direction = e.target.value;
    setDirectionRows(directions);
  };

  const onAddDirectionRowHandler = () => {
    setDirectionRows([...directionRows, { direction: ''}]);
  };

  // Handle submit 

  const onSubmitHandler = () => {
    console.log("submit success");
  };
  
    //This is the html for the page, which contains a header and a form for user input
    return (
        <div>
          <h1>Digital Cookbook</h1>
          Add to your personalized digital cookbook here!
          <RecipeForm 
          ingredientRows={ingredientRows}  
          directionRows={directionRows} 
          onIngredientChange={onIngredientChangeHandler} 
          onDirectionChange={onDirectionChangeHandler}
          onAddIngredientRow={onAddIngredientRowHandler}
          onAddDirectionRow={onAddDirectionRowHandler}
          onSubmitClick={clickAlert}
          />
        </div>
      );
    };

  export default Form;
