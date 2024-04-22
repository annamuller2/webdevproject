import Parse from "parse";

//changes a regular file to a parse fomatted file
export const createParseFile = (thefile) => {
  const parseFile = new Parse.File("photo.jpg", thefile);
  return parseFile;
};

//changes input to a parse formatted arra
export const createDirectionsArray = (Directions) => {
   console.log(Directions);
   const directionStrings = Directions.map(item => item.direction);
   return directionStrings;
};

