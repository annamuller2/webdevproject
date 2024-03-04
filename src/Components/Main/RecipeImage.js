//this is the image component, which loads the image file named in the JSON
import FoodImages from "../../Images/cookies.jpg";

const RecipeImage = ({ imageLink }) => {

  const imagePath = `../../Images/${imageLink}`;
  return (
    <div>
      <img src={imagePath} alt={imagePath} />
    </div>
  );
};

export default RecipeImage;