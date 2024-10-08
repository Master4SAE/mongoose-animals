import mongoose from "mongoose";
import { categorySchema } from "../schemas/categorySchema";

const Category = mongoose.model('Category', categorySchema);

const createCategory = async (categoryName: string) => {
    try {
        const newCategory = await Category.create({
          category_name: categoryName,
        });
        console.log('Category created:', newCategory);
        return newCategory;
      } catch (error) {
        console.error('Error creating category:', error);
        throw error;
      }
}
const fetchCategory = async () => {
  const category = await Category.find({});
  console.log(category)
  return category
}
const findById = async (id: string) => {
  const fetchCategoryById = await Category.findById(id).exec();
  return fetchCategoryById
}
export {createCategory, fetchCategory, findById}