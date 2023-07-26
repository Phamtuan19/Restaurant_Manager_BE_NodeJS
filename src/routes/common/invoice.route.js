import express from 'express';
import { createInvoice } from '../../controllers/invoice.controller';
const invoiceRoute = express.Router();

invoiceRoute.post('/create/invoice', createInvoice);

export default invoiceRoute;
        