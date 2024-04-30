import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new ingredient with Title
export const createUserIngredient = (Ingredients, Recipe) => {

    console.log("Creating: ", Ingredients);
    console.log("THIS IS THE PASSED RECIPE", Recipe);

    // Assuming you have a class for ingredients in your database
    const UserIngredient = Parse.Object.extend('UserIngredient');

    // Loop through each row and save it to the database
    Ingredients.forEach(row => {
        const userIngredient = new UserIngredient();
        userIngredient.set('amount', row.amount);
        userIngredient.set('unit', row.unit);
        userIngredient.set('name', row.name);
        userIngredient.set('detail', row.detail);
        userIngredient.set('recipe', Recipe);

        // Save the ingredient object
        userIngredient.save().then((savedUserIngredient) => {
            console.log('Ingredient saved', savedUserIngredient);
        }).catch((error) => {
            console.error('Error saving ingredient', error);
        });
    });

};

export let UserIngredients = {};
UserIngredients.collection = [];

//This is how the ingredients for each recipe are found
export const getAllUserIngredientsByRecipe = (recipeId) => {
    const UserIngredient = Parse.Object.extend("UserIngredient");
    const query = new Parse.Query(UserIngredient);

    //The input to the query needs to be collected as an object and converted to a string
    const recipePointer = new Parse.Object("UserRecipe");
    recipePointer.id = recipeId['recipeId'].toString();

    query.equalTo("recipe", recipePointer);

    return query.find().then((results) => {
      console.log("results: ", results);
      // returns array of Ingredient objects
      return results;
    });
  };