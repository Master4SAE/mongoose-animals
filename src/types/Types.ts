import { Types } from "mongoose";

type Category = {
  category_name: string;
};

type Species = {
  species_name: string;
  image: string;
  category: Types.ObjectId;
  location: {
    type: "Point";
    coordinates: [number, number]; 
  };
};
type Animal = {
  animal_name: string;
  birthdate: Date;
  species: Types.ObjectId;
  location: {
    type: "Point";
    coordinates: [number, number]; 
  };
};
  
export {Category, Species, Animal};
  