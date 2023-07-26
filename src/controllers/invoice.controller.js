import { responseError, responseSuccess } from '../helpers/response';
import invoiceRepository from '../repositories/invoice.repository';

// *************************************** API ADMIN ***************************************

// [POST]
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await invoiceRepository.create(body);

      const response = {
         data,
         message: 'Đặt hàng thành công!',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API COMMON ***************************************

// *************************************** API CART PAGE ***************************************
// [POST] create
export const createInvoice = async (req, res) => {
   try {
      const body = req.body;
      const data = await invoiceRepository.create(body);

      return responseSuccess(res, data);
   } catch (error) {
      return responseError(res, error);
   }
};
