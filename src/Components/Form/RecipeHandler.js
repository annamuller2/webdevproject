import * as React from 'react';
import RecipeForm from './RecipeForm';

const RecipeHandler = () => {

const [ingredientRows, setIngredientRows] = React.useState([{ amount: '', unit: '', name: '', detail: '' }]);

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

  // Handle submit 

  const handleSubmit = () => {
    console.log("submit success");
  };

  return (
    <div>
      <RecipeForm
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