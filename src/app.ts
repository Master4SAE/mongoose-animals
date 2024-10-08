import dotenv from 'dotenv';
dotenv.config();
import express, {Request, Response} from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import {notFound, errorHandler} from './middlewares';
import api from './api';
import {MessageResponse} from './types/Messages';
import { getCategory, getCategoryById, postCategory } from './controllers/categoryController';
import { getSpecies, postSpecies, getSpeciesById } from './controllers/speciesController';
import { getAnimals, postAnimal, getAnimalById, putAnimalById } from './controllers/animalController';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>('/', (_req: Request, res: Response) => {
  res.json({
    message: 'API location: api/v1',
  });
});
app.post('/postCategory', postCategory)
app.post('/postSpecies', postSpecies)
app.post('/postAnimal', postAnimal)

app.get('/Animals', getAnimals)
app.get('/Category', getCategory)
app.get('/Species', getSpecies)

app.get('/Category/:id', getCategoryById)
app.get('/Animals/:id', getAnimalById)
app.get('/Species/:id', getSpeciesById)

app.put('/Animals/:id', putAnimalById)

app.use('/api/v1', api);

app.use(notFound);
app.use(errorHandler);

export default app;
