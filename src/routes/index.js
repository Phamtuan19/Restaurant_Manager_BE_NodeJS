import adminRoute from './admin';
import commonRoute from './common';
import userRoutes from './user';

const routes = [{ ...userRoutes }, { ...adminRoute }, { ...commonRoute }];

export default routes;
