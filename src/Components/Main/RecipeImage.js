//this is the image component, which loads the image file named in the JSON
import HotChocolate from "../../Images/hotchocolate.webp";
import Cookies from "../../Images/cookies.jpg"

const RecipeImage = ({ imageLink }) => {
  try {
    const imagePath = require(`../../Images/${imageLink}`).default;
    console.log("imagePath:", imagePath);
    return (
      <div>
        <img key={imageLink} src={imagePath} alt={imageLink} />
      </div>
    );
  } catch (error) {
    console.error("Error loading image:", error);
    return (
      <div>
        <p>Error loading image: {error.message}</p>
      </div>
    );
  }
};

export default RecipeImage;