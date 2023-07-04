import { responseSuccess } from '../helpers/response';
import roleModel from '../models/roles.model';

export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await roleModel({ ...body }).save();

      const response = {
         data,
         message: 'Tạo class thành công',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};
