import { responseError, responseSuccess } from '../helpers/response';
import categoriesRepository from '../repositories/categories.repositiry';

// *************************************** API ADMIN ***************************************

// [POST] api/admin/products/create
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await categoriesRepository.create(body);

      const response = {
         data,
         message: 'Thêm danh mục thành công!',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

export const getAll = async (req, res) => {
   try {
      const data = await categoriesRepository.read();

      const response = {
         data,
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API COMMON ***************************************

// *************************************** API HOME PAGE ***************************************
export const menuCategories = async (req, res) => {
   try {
      const data = await categoriesRepository.read();

      const response = {
         data,
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API BOOKING PAGE ***************************************
// [GET] booking/categories
export const bookingCategories = async (req, res) => {
   try {
      const data = await categoriesRepository.read();

      return responseSuccess(res, data);
   } catch (error) {
      return responseError(res, error);
   }
};
