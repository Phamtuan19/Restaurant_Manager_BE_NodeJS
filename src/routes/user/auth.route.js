import express from 'express';
import { getUser, validate, register, create, getAll } from '../../controllers/user.controller';
import checkAuth from '../../middlewares/checkAuth';
import authenticateToken from '../../middlewares/authenticateToken';
import refreshToken from '../../middlewares/refreshToken';

const authRoute = express.Router();

authRoute.post('/login', checkAuth);
authRoute.get('/user', authenticateToken, getUser);

authRoute.get('/', getAll);
authRoute.post('/register', register);
authRoute.get('/refresh-token', refreshToken);

export default authRoute;
