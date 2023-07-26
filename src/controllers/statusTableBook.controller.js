import { responseSuccess, responseError } from '../helpers/response';
import StatusTableBookSchema from '../models/statusTableBook.model';

// [POST] create status invoice
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await StatusTableBookSchema(body).save();

      const response = {
         data,
         message: 'Tạo trạng thái bàn thành công',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};
