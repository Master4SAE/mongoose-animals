import mongoose from 'mongoose';
import { Species } from '../types/Types';


const Schema = mongoose.Schema;

const speciesSchema = new Schema<Species>({
    species_name: {
        type: String,
        required: true,
        unique: true,
        minlength: 2,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number, Number],
            required: true,
            index: "2dsphere"
        }
    }
})
export {speciesSchema}