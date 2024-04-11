// import RecipeImage from "./RecipeImage.js"
import RecipeDirections from "./RecipeDirections.js"
import RecipeIntermediate from "./RecipeIntermediate.js"
import RecipeImage from "./RecipeImage.js"

//Recipe list component, which is a prent component to RecipeImage, RecipeIngrediennts, and RecipeDirections
const RecipeList = ({ recipes }) => {
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
              {/* we will uncomment the RecipeImage component in feature5 */}
              <RecipeImage imageUrl={recipe.get("image").url()} />
              <RecipeIntermediate recipeId={recipe.id}  />
              <RecipeDirections recipe={recipe.get("directions")} /> 

            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecipeList;