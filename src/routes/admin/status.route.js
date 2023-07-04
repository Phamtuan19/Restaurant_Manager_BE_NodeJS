import express from 'express';
import { create } from '../../controllers/statusTable.controller';

const statuRoute = express.Router();

// [POST] create status table
statuRoute.post('/table/create', create);

export default statuRoute;
