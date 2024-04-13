import { createRecipe } from "../../Services/Common/Recipes.js";
import Parse from "parse";

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("HERE IS THE FILE");
    console.log(file);
    const parseFile = new Parse.File("photo.jpg", file);
    createRecipe("test", parseFile); // Call the createRecipe function with the uploaded file
};

const ImageForm = () => {
    return (
        <div>
            <input type="file" id="profilePhotoFileUpload" onChange={handleFileUpload} />
        </div>
    );
};

export default ImageForm;