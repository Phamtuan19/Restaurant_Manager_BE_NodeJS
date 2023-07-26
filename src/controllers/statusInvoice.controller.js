import { responseSuccess, responseError } from '../helpers/response';
import StatusInvoicechema from '../models/statusInvoice.model';

// [POST] create status invoice
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await StatusInvoicechema(body).save();

      const response = {
         data,
         message: 'Tạo trạng thái bàn thành công',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};
