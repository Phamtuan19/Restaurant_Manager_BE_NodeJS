import express from 'express';
import { create } from '../../controllers/role.controller';

const roleRoute = express.Router();

roleRoute.post('create', create);

export default roleRoute;
