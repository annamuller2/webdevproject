import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

//CREATE operation - new recipe with Title
export const createRecipe = (Title, File) => {
  console.log("Creating: ", Title);
  const Recipe = Parse.Object.extend("Recipe");
  const recipe = new Recipe();
  // using setter to UPDATE the object
  recipe.set("title", Title);
  
  //this is the line that sets the image (we can change)
  recipe.set("image",File);

  return recipe.save().then((result) => {
    // returns new Recipe object
    return result;
  });
};

// export const createRecipe = async (title, imageFile) => {
//   const Recipe = Parse.Object.extend("Recipe");
//   const recipe = new Recipe();
//   recipe.set("title", title);
  
//   try {
//       // Save the recipe
//       await recipe.save();

//       // Associate the image with the recipe
//       if (imageFile) {
//           const name = "photo.jpg";
//           const parseFile = new Parse.File(name, imageFile);
//           await parseFile.save();
//           recipe.set("image", parseFile);
//           await recipe.save();
//       }

//       return recipe;
//   } catch (error) {
//       console.error('Error creating recipe:', error);
//       throw error;
//   }
// };

// READ operation - get recipe by ID
export const getById = (id) => {
  const Recipe = Parse.Object.extend("Recipe");
  const query = new Parse.Query(Recipe);
  return query.get(id).then((result) => {
    // return Recipe object with objectId: id
    return result;
  });
};

export let Recipes = {};
Recipes.collection = [];

// READ operation - get all recipes in Parse class Recipe
export const getAllRecipes = () => {
  const Recipe = Parse.Object.extend("Recipe");
  const query = new Parse.Query(Recipe);
  return query.find().then((results) => {
    console.log("results: ", results);
    // returns array of Recipe objects
    return results;
  });
};

// DELETE operation - remove recipe by ID
export const removeRecipe = (id) => {
  const Recipe = Parse.Object.extend("Recipe");
  const query = new Parse.Query(Recipe);
  return query.get(id).then((recipe) => {
    recipe.destroy();
  });
};

