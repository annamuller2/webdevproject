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