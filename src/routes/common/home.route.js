import express from 'express';
import { homeCategories, trendingOrders } from '../../controllers/product.controller';
const homeRoute = express.Router();

homeRoute.get('/product/categories', homeCategories);
homeRoute.get('/product/trending', trendingOrders);

export default homeRoute;
