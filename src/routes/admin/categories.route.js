import express from 'express';
import { create, getAll } from '../../controllers/category.controller';

const categoriesRoute = express.Router();

categoriesRoute.post('/create', create);
categoriesRoute.get('/', getAll);

export default categoriesRoute;
