import React from 'react';

const RecipeImage = ({ imageUrl }) => {

    return (
        <div>
            <img src={imageUrl} alt="Recipe" />
        </div>
    );
};

export default RecipeImage;

