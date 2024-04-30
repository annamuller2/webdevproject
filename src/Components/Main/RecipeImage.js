import React from 'react';

const RecipeImage = ({ imageUrl }) => {

    return (
        <div>
            <img src={imageUrl} alt="Recipe" class="max-h-80 mx-auto my-4 rounded-lg shadow" />
        </div>
    );
};

export default RecipeImage;

