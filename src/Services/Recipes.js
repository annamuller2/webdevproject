import axios from 'axios';

//Not currently calling this function, but we are leaving it for later use
/*
export const createRecipe = (title, link, ingredients, imagename) => {
  return axios({
    method: "post",
    url: `${url}/users`,
    data: {
      id,
      firstName,
      lastName,
      email,
      password,
    },
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};
*/

//This is the axios call that is being used to call data from the JSON

export const getAllRecipes = () => {
  return axios
    .get('feature4\feature4-reactapp\src\Services\recipes.json')
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => {
      console.error('GET Error:', err);
      throw err; // Propagate the error to the calling code if needed
    });
};
