import React from "react";

//this is the image component, which loads the image file named in the JSON
const RecipeImage = ({ imageLink }) => {
  return (
    <div>
      <img src="./Images/{imageLink}" />
    </div>
  );
};

export default RecipeImage;