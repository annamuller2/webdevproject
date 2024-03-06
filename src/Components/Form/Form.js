import RecipeForm from "./RecipeForm.js";

const Form = () => {

    function clickAlert() {
      alert("Submission received!");
    }
  
    //This is the html for the page, which contains a header and a form for user input
    return (
        <div>
          <h1>Digital Cookbook</h1>
          Add to your personalized digital cookbook here!
          <RecipeForm onSubmitClick={clickAlert}/>
        </div>
      );
    };

  export default Form;