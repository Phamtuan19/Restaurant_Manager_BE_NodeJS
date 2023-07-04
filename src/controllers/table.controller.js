import { responseSuccess, responseError } from '../helpers/response';
import tableRepository from '../repositories/tables.repository';

// *************************************** API ADMIN ***************************************

// [POST] Create table
export const create = async (req, res) => {
   try {
      const user = res.locals.user;
      const body = req.body;

      const data = await tableRepository.create({ ...body, userId: user._id, statusId: '64a3f26f35ee74932a5ad977' });

      const response = {
         data,
         message: 'Thêm bàn thành công',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API COMMON ***************************************

export const bookingTable = async (req, res) => {
   try {
      const data = await tableRepository.read({});

      return responseSuccess(res, data);
   } catch (error) {
      return responseError(res, error);
   }
};
