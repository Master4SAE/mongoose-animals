import mongoose from 'mongoose';
import { Animal } from '../types/Types';


const Schema = mongoose.Schema;

const animalSchema = new Schema<Animal>({
    animal_name: {
        type: String,
        required: true,
        minlength: 2,
    },
    birthdate: {
        type: Date,
        validator: function(v: DateConstructor) {
            if (v >= Date){
                return "Date can not be in future"
            }
        },
        required: true
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
        }
    },
    species: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})
export { animalSchema }