import express from 'express';
import { menuCategories } from '../../controllers/category.controller';
import { menuProducts } from '../../controllers/product.controller';
const menuRoute = express.Router();

menuRoute.get('/categories', menuCategories);
menuRoute.get('/products', menuProducts);

export default menuRoute;
