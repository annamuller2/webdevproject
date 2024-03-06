import RecipeImage from "./RecipeImage.js"
import RecipeDirections from "./RecipeDirections.js"
import RecipeIngredients from "./RecipeIngredients.js"

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

              {/* const [ingredients, setIngredients] = useState([]);
  
              useEffect(() => {
              if (Ingredients.collection.length) {
                setIngredients(Ingredients.collection);
              } else {
                getAllIngredients().then((ingredients) => {
                console.log(ingredients);
                setIngredients(ingredients);
                });
              }
              }, []); */}

              {/* call the child components */}
              <RecipeImage imageLink={recipe.get("imageName")} />
              <RecipeIngredients recipeId={recipe.get("objectId")}  />
              <RecipeDirections recipe={recipe.get("directions")} /> 

            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default RecipeList;