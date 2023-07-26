import bookingRoute from './booking.route';
import homeRoute from './home.route';
import invoiceRoute from './invoice.route';
import menuRoute from './menu.route';

const commonRoute = {
   prefix: '/',
   routes: [
      {
         path: 'home',
         route: homeRoute,
      },
      {
         path: 'menu',
         route: menuRoute,
      },
      {
         path: 'booking',
         route: bookingRoute,
      },
      {
         path: 'cart',
         route: invoiceRoute,
      },
   ],
};

export default commonRoute;
