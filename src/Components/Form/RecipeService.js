import Parse from "parse";
//import { createRecipe } from "../../Services/Common/Recipes.js";


// export const createImage = (Title) => {
//     const fileUploadControl = $("#profilePhotoFileUpload")[0];
//     if (fileUploadControl.files.length > 0) {
//     const file = fileUploadControl.files[0];
//     const name = "photo.jpg";

//     const parseFile = new Parse.File(name, file);


//     }
// };

export const createDirectionsArray = (Directions) => {
   console.log(Directions);
   const directionStrings = Directions.map(item => item.direction);
   return directionStrings;
};

export const createUser = (newUser) => {
    const user = new Parse.User();
  
    user.set("username", newUser.email);
    user.set("firstName", newUser.firstName);
    user.set("lastName", newUser.lastName);
    user.set("password", newUser.password);
    user.set("email", newUser.email);
  
    console.log("User: ", user);
    return user
      .signUp()
      .then((newUserSaved) => {
        return newUserSaved;
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

//   export const createRecipe = (Title) => {
//     console.log("Creating: ", Title);
//     const Recipe = Parse.Object.extend("Recipe");
//     const recipe = new Recipe();
//     // using setter to UPDATE the object
//     recipe.set("title", Title);
//     return recipe.save().then((result) => {
//       // returns new Recipe object
//       return result;
//     });
//   };
