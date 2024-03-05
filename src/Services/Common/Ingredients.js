import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// CREATE operation - new ingredient with Title
export const createIngredient = (Name) => {
  console.log("Creating: ", Name);
  const Ingredient = Parse.Object.extend("Ingredient");
  const ingredient = new Ingredient();
  // using setter to UPDATE the object
  ingredient.set("name", Name);
  return ingredient.save().then((result) => {
    // returns new Ingredients object
    return result;
  });
};

// READ operation - get lesson by ID
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
