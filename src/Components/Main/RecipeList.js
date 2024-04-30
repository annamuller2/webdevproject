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
              <div class="mx-auto w-full max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow mb-4 mt-4 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h1 class="text-2xl font-bold mb-4 mt-4"> {recipe.get("title")} </ h1>
              {/* call the child components */}
              <RecipeImage imageUrl={recipe.get("image").url()} />
              {userFlag ? (
                <UserIntermediate recipeId={recipe.id} />
              ) : (
                <RecipeIntermediate recipeId={recipe.id} />
              )}
              <RecipeDirections recipe={recipe.get("directions")} /> 
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecipeList;