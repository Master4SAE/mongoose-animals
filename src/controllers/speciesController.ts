import { createSpecies, fetchAllSpecies } from "../models/speciesModel";
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

export {postSpecies, getSpecies}