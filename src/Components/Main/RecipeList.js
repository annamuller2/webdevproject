// import RecipeImage from "./RecipeImage.js"
import RecipeDirections from "./RecipeDirections.js"
import RecipeIntermediate from "./RecipeIntermediate.js"
import UserIntermediate from "../UserRecipes/UserIntermediate.js"
import RecipeImage from "./RecipeImage.js"

//Recipe list component, which is a prent component to RecipeImage, RecipeIngrediennts, and RecipeDirections
const RecipeList = ({ recipes, userFlag }) => {
    return (
      <div>
        <hr />
        <ul>
          {/* Check if recipes is defined before mapping */}
          {recipes && recipes.map((recipe) => (
            <li key={recipe}>

              {/* print the title, image, ingredients, and directions for each recipe */}

              {recipe.get("title")}
              {/* call the child components */}
              <RecipeImage imageUrl={recipe.get("image").url()} />
              {userFlag ? (
                <UserIntermediate recipeId={recipe.id} />
              ) : (
                <RecipeIntermediate recipeId={recipe.id} />
              )}
              <RecipeDirections recipe={recipe.get("directions")} /> 

            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecipeList;