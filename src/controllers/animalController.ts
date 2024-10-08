import { createAnimal, fetchAnimals } from "../models/animalsModel";
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

export {postAnimal, getAnimals}