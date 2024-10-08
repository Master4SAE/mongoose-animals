import { createAnimal, fetchAnimals, findById, updateById } from "../models/animalsModel";
import {Request, Response} from "express";

const postAnimal = async (req: Request, res: Response) => {
    const thisAnimal = req.body
    const animal = await createAnimal(thisAnimal);
    res.send(`Category created: ${animal}`)

}

const getAnimals = async (req: Request, res: Response) => {
    const fetchAllAnimals = await fetchAnimals();
    res.send(fetchAllAnimals)
}
const getAnimalById = async (req: Request, res: Response) => {
    const id = req.params.id
    const fetchedData = await findById(id)
    res.send(fetchedData)
}
const putAnimalById = async (req: Request, res: Response) => {
    const updateAnimal = await updateById(req.params.id, req.body);
    res.send(updateAnimal) 
}

export {postAnimal, getAnimals, getAnimalById, putAnimalById}