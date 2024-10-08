import { createSpecies, fetchAllSpecies, findById } from "../models/speciesModel";
import {Request, Response} from "express";

const postSpecies = async (req: Request, res: Response) => {
    const thisSpecies = req.body
    const species = await createSpecies(thisSpecies);
    res.send(`Category created: ${species}`)

}
const getSpecies = async (req: Request, res: Response) => {
    const fetchSpecies = await fetchAllSpecies();
    res.send(fetchSpecies)
}
const getSpeciesById = async (req: Request, res: Response) =>{
    const id = req.params.id
    const fetchedData = await findById(id)
    res.send(fetchedData)
}

export {postSpecies, getSpecies, getSpeciesById}