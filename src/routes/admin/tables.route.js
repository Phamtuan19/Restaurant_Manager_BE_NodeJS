import express from 'express';
import authenticateToken from '../../middlewares/authenticateToken';
import { create } from '../../controllers/table.controller';

const tableRoute = express.Router();

// [POST] /admin/tables/create
tableRoute.post('/create', authenticateToken, create);

export default tableRoute;
