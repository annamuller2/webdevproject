//this is the image component, which loads the image from the database
//this feature is not fully built out yet, we will add this in feature5

const RecipeImage = ({ imageLink }) => {
  
    // Check if the imageLink is a File object
    if (imageLink instanceof File) {
      // Create a URL for the File object
      const imageUrl = URL.createObjectURL(imageLink);
  
      return (
        <div>
          <img src={imageUrl} alt="Recipe" />
        </div>
      );
    }
  
    // Handle the case when imageLink is not a File
    return (
      <div>
        Invalid imageLink type.
      </div>
    );
  };

export default RecipeImage;