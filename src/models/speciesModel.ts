import mongoose, { Types } from "mongoose";
import { speciesSchema } from "../schemas/speciesSchema";
import { Species } from "../types/Types"

const species = mongoose.model<Species>('Species', speciesSchema);

const createSpecies = async (param:{speciesName: string, image: string, category: Types.ObjectId, coordinates: [number, number]}) => {
    try {
        const newSpecies = await species.create({
          species_name: param.speciesName,
          image: param.image,
          category: param.category,
          location: {
            type: "Point",
            coordinates: param.coordinates,
          },

        });
        console.log('Category created:', newSpecies);
        return newSpecies;
      } catch (error) {
        console.error('Error creating category:', error);
        throw error; 
      }
}
const fetchAllSpecies = async () =>{
  const fetchSpecies = await species.find({})
  return fetchSpecies
}
export {createSpecies, fetchAllSpecies}