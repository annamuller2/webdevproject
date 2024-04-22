//import RecipeForm from "./RecipeForm.js";
import RecipeHandler from "./RecipeHandler";

const Form = () => {
  
    //This is the html for the page, which contains a header and a form for user input
    return (
        <div>
          <h1>Digital Cookbook</h1>
          Add to your personalized digital cookbook here!
          <RecipeHandler/>
        </div>
      );
    };

  export default Form;