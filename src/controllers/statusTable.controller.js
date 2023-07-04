import { responseSuccess, responseError } from '../helpers/response';
import statusTableSchema from '../models/statusTable.model';

// [POST] create status table
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await statusTableSchema({ ...body }).save();

      const response = {
         data,
         message: 'Tạo trạng thái bàn thành công',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};
