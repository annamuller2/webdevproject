import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

//CREATE operation - new recipe with Title
export const createUserRecipe = (Title, Type, Directions, File) => {
  console.log("Creating: ", Title);
  const UserRecipe = Parse.Object.extend("UserRecipe");
  const userRecipe = new UserRecipe();

  // get the current user id and set it as user 
  const currUser = Parse.User.current();
  userRecipe.set("user", currUser.id);

  // using setter to UPDATE the object
  userRecipe.set("title", Title);
  userRecipe.set("type", Type);
  
  //this is the line that sets the directions
  userRecipe.set("directions",Directions)

  //this is the line that sets the image
  userRecipe.set("image",File);

  return userRecipe.save().then((result) => {
    // returns new Recipe object
    return result;
  });
};

// get all recipes in the UserRecipe class
export const getAllUserRecipes = () => {
    const UserRecipe = Parse.Object.extend("UserRecipe");
    const query = new Parse.Query(UserRecipe);
    return query.find().then((results) => {
      console.log("results: ", results);
      // returns array of Recipe objects
      return results;
    });
  };