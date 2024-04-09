import React, { useState, useEffect } from 'react';

//this is the image component, which loads the image from the database
//this feature is not fully built out yet, we will add this in feature5

const RecipeImage = ({ imageLink }) => {
  
      const image_link = imageLink.url();
      return (
          <div>
              <img src={image_link} alt="Image" />
          </div>
      );
  }
  
export default RecipeImage;


import React, { useEffect, useState } from 'react';
import Parse from 'parse';

function ImageComponent() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        async function fetchImage() {
            try {
                const query = new Parse.Query('Image');
                // Add conditions to the query to specify which image you want to fetch
                query.equalTo('imageName', 'example_image'); // Replace 'imageName' and 'example_image' with your actual field name and value
                const imageObject = await query.first();
                if (imageObject) {
                    const imageUrl = imageObject.get('imageUrl');
                    setImageUrl(imageUrl);
                } else {
                    console.log('Image not found');
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        }

        fetchImage();
    }, []);

    return (
        <div>
            <img src={imageUrl} alt="Image" />
        </div>
    );
}

export default ImageComponent;
