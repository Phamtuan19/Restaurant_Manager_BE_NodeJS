import express from 'express';
import * as statusTableController from '../../controllers/statusTable.controller';
import * as statusInvoiceController from '../../controllers/statusInvoice.controller';
import * as statusTableBook from '../../controllers/statusTableBook.controller';

const statuRoute = express.Router();

// [POST] create status
statuRoute.post('/table/create', statusTableController.create);
statuRoute.post('/envoice/create', statusInvoiceController.create);
statuRoute.post('/table-book/create', statusTableBook.create);

export default statuRoute;
