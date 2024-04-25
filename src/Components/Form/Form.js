//import RecipeForm from "./RecipeForm.js";
import RecipeHandler from "./RecipeHandler";

const Form = () => {

  
    //This is the html for the page, which contains a header and a form for user input
    return (
        <div>
          <h1 class="mb-4 mt-6 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Add Recipe</h1>
          <RecipeHandler/>
        </div>
      );
    };

  export default Form;
