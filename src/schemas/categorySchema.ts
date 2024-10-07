import mongoose from 'mongoose';
import { Category } from '../types/Types';

const Schema = mongoose.Schema;

const categorySchema = new Schema<Category>({
    category_name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    }
})