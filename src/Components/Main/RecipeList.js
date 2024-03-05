import RecipeImage from "./RecipeImage.js"
import RecipeDirections from "./RecipeDirections.js"
import RecipeIngredients from "./RecipeIngredients.js"

//Recipe list component, which is a prent component to RecipeImage, RecipeIngrediennts, and RecipeDirections
const RecipeList = ({ recipes, ingredients }) => {
    return (
      <div>
        <hr />
        <ul>
          {/* Check if recipes is defined before mapping */}
          {recipes && recipes.map((recipe) => (
            <li key={recipe}>
              {/* print the title, image, ingredients, and directions for each recipe */}
              {recipe.get("title")}

              <RecipeImage imageLink={recipe.get("imageName")} />
              <RecipeIngredients recipeId={recipe.get("objectId")} ingredients={ingredients} />
              <RecipeDirections recipe={recipe.get("directions")} /> 

            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecipeList;