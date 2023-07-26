import express from 'express';
import { getUser, validate, register, create, getAll, changePassword, update } from '../../controllers/user.controller';
import checkAuth from '../../middlewares/checkAuth';
import authenticateToken from '../../middlewares/authenticateToken';
import refreshToken from '../../middlewares/refreshToken';

const authRoute = express.Router();

authRoute.post('/login', checkAuth);
authRoute.get('/user', authenticateToken, getUser);

authRoute.get('/', getAll);
authRoute.post('/register', register);
authRoute.get('/refresh-token', refreshToken);

authRoute.put('/change-password', authenticateToken, changePassword);
authRoute.put('/edit', authenticateToken, update);

export default authRoute;
