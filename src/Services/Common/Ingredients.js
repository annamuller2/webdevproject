import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new ingredient with Title
export const createIngredient = (Ingredients, Recipe) => {

  console.log("Creating: ", Ingredients);
  console.log("THIS IS THE PASSED RECIPE", Recipe);

  // Assuming you have a class for ingredients in your database
const Ingredient = Parse.Object.extend('Ingredient');

// Loop through each row and save it to the database
Ingredients.forEach(row => {
  const ingredient = new Ingredient();
  ingredient.set('amount', row.amount);
  ingredient.set('unit', row.unit);
  ingredient.set('name', row.name);
  ingredient.set('detail', row.detail);
  ingredient.set('recipe', Recipe);

  // Save the ingredient object
  ingredient.save().then((savedIngredient) => {
    console.log('Ingredient saved', savedIngredient);
  }).catch((error) => {
    console.error('Error saving ingredient', error);
  });
});

};

// READ operation - get ingredients by ID
export const getById = (id) => {
  const Ingredient = Parse.Object.extend("Ingredient");
  const query = new Parse.Query(Ingredient);
  return query.get(id).then((result) => {
    // return Ingredient object with objectId: id
    return result;
  });
};

export let Ingredients = {};
Ingredients.collection = [];

// READ operation - get all ingredients in Parse class Ingredient
export const getAllIngredients = () => {
  const Ingredient = Parse.Object.extend("Ingredient");
  const query = new Parse.Query(Ingredient);
  return query.find().then((results) => {
    console.log("results: ", results);
    // returns array of Ingredient objects
    return results;
  });
};

// DELETE operation - remove ingredient by ID
export const removeIngredient = (id) => {
  const Ingredient = Parse.Object.extend("Ingredient");
  const query = new Parse.Query(Ingredient);
  return query.get(id).then((ingredient) => {
    ingredient.destroy();
  });
};

//This is how the ingredients for each recipe are found
export const getAllIngredientsByRecipe = (recipeId) => {
    const Ingredient = Parse.Object.extend("Ingredient");
    const query = new Parse.Query(Ingredient);

    //The input to the query needs to be collected as an object and converted to a string
    const recipePointer = new Parse.Object("Recipe");
    recipePointer.id = recipeId['recipeId'].toString();

    query.equalTo("recipe", recipePointer);

    return query.find().then((results) => {
      console.log("results: ", results);
      // returns array of Ingredient objects
      return results;
    });
  };