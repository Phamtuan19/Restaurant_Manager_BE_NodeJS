import express from 'express';
import { bookingTable } from '../../controllers/table.controller';
import { bookingProducts } from '../../controllers/product.controller';
import { bookingCategories } from '../../controllers/category.controller';
import * as tableBookController from '../../controllers/tableBook.controller';

const bookingRoute = express.Router();

bookingRoute.get('/tables', bookingTable);
bookingRoute.get('/products', bookingProducts);
bookingRoute.get('/categories', bookingCategories);

// API Create Invoice
bookingRoute.post('/table-book/create', tableBookController.create);

export default bookingRoute;
