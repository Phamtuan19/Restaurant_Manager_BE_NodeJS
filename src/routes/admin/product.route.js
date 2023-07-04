import express from 'express';
import { create, index } from '../../controllers/product.controller';
import authenticateToken from '../../middlewares/authenticateToken';

const productRoute = express.Router();

// *************************************** API ADMIN ***************************************
productRoute.post('/create', authenticateToken, create);
productRoute.get('/', index);


export default productRoute;
