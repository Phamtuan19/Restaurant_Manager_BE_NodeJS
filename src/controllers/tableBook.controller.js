import { responseSuccess, responseError } from '../helpers/response';
import TableBookSchema from '../models/tableBook.model';

// [POST] create invoice
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await TableBookSchema({ listProduct: body.products, ...body }).save();

      const response = {
         data,
         message: 'Đặt bàn thành công.',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};
