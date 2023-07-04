import categoriesRoute from './categories.route';
import productRoute from './product.route';
import roleRoute from './role.route';
import statuRoute from './status.route';
import tableRoute from './tables.route';

const adminRoute = {
   prefix: '/admin/',
   routes: [
      {
         path: 'roles',
         route: roleRoute,
      },
      {
         path: 'products',
         route: productRoute,
      },
      {
         path: 'categories',
         route: categoriesRoute,
      },
      {
         path: 'tables',
         route: tableRoute,
      },
      {
         path: 'status',
         route: statuRoute,
      },
   ],
};

export default adminRoute;
