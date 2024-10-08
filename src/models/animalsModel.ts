import mongoose, { Types } from "mongoose";
import { animalSchema } from "../schemas/animalSchema"
import { Animal, } from "../types/Types"

const Animal = mongoose.model<Animal>('Animal', animalSchema);

const createAnimal = async (param:{animalName: string, birthdate: Date, species: Types.ObjectId, coordinates: [number, number]}) => {
    try {
        const newAnimal = await Animal.create({
          animal_name: param.animalName,
          birthdate: param.birthdate,
          species: param.species,
          location: {
            type: "Point",
            coordinates: param.coordinates,
          },

        });
        console.log('Category created:', newAnimal);
        return newAnimal;
      } catch (error) {
        console.error('Error creating category:', error);
        throw error; 
      }
}
const fetchAnimals = async () => {
  const animals = await Animal.find({});
  console.log(animals)
  return animals
}
const findById = async (id: string) => {
  const fetchAnimalById = await Animal.findById(id).exec();
  return fetchAnimalById
}
const updateById = async  (id: string, updateData:any) => {
  const updateAnimalById = await Animal.updateOne({_id: id}, {$set: updateData});
  console.log(
    updateAnimalById.matchedCount,
    updateAnimalById.modifiedCount,
    updateAnimalById.acknowledged,
    updateAnimalById.upsertedId,
    updateAnimalById.upsertedCount,
    updateData
  )
  return updateAnimalById
}
export {createAnimal, fetchAnimals, findById, updateById}