import { createCategory, fetchCategory } from "../models/categoryModel";
import {Request, Response} from "express";

const postCategory = async (req: Request, res: Response) => {
    const categoryName = req.body.category_name
    const category = await createCategory(categoryName);
    res.send(`Category created: ${category}`)

}
const getCategory = async (req: Request, res: Response) => {
    const fetchAllCategories = await fetchCategory();
    console.log(fetchAllCategories)
    res.send(fetchAllCategories)
}

export {postCategory, getCategory}