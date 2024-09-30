import { ObjectId } from "mongodb";

type Category = {
  Category_name: string;
};

type Species = {
  species_name: string;
  image: string;
  category: ObjectId;
  location: {
    type: "Point";
    coordinates: [number, number]; 
  };
};
type Animal = {
  animal_name: string;
  birthdate: Date;
  species: ObjectId;
  location: {
    type: "Point";
    coordinates: [number, number]; 
  };
};
  
export {Category, Species, Animal};
  