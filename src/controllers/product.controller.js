import { responseError, responseSuccess } from '../helpers/response';
import productRepository from '../repositories/product.repository';
import ProductModel from '../models/products.model';
import mongoose from 'mongoose';

const PAGE_SIZE_ADMIN = 10;
const PAGE_SIZE_MENU = 12;

// *************************************** API ADMIN ***************************************

// [POST] api/admin/products/create
export const create = async (req, res) => {
   try {
      const body = req.body;
      const user = res.locals.user;
      // console.log(user)
      const data = await productRepository.create({ ...body, userId: user._id });

      const response = {
         data,
         message: 'Thêm sản phẩm thành công!',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// [GET] api/admin/products?page=?
export const index = async (req, res) => {
   try {
      const page = parseInt(req.query.page) || 1;
      const skip = (page - 1) * PAGE_SIZE_ADMIN;

      if (page < 1) page = 1;

      const data = await ProductModel.find({}).skip(skip).limit(PAGE_SIZE_ADMIN);
      const dataCount = await ProductModel.countDocuments({});

      const response = {
         pageCount: Math.ceil(dataCount / PAGE_SIZE_ADMIN),
         data,
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API CLIENT ***************************************

// *************************************** API HOME PAGE ***************************************
export const homeCategories = async (req, res) => {
   try {
      const data = await ProductModel.find({}).limit(4);
      const response = {
         data,
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

export const trendingOrders = async (req, res) => {
   try {
      const data = await ProductModel.find({}).limit(6);
      const response = {
         data,
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API MENU PAGE ***************************************
// [GET] menu/products?page=...&categoryId=...&q=...
export const menuProducts = async (req, res) => {
   try {
      const page = parseInt(req.query.page) || 1;
      const skip = (page - 1) * PAGE_SIZE_MENU;
      const search = req.query.q || '';

      if (page < 1) page = 1;

      if (req.query.categoryId) {
         const categoryId = req.query.categoryId;

         const data = await ProductModel.find({
            categoryId,
            name: { $regex: search, $options: 'i' },
         })
            .skip(skip)
            .limit(PAGE_SIZE_MENU);

         const dataCount = await ProductModel.countDocuments({ categoryId, name: { $regex: search, $options: 'i' } });

         const response = {
            pageCount: Math.ceil(dataCount / PAGE_SIZE_MENU),
            data,
         };

         return responseSuccess(res, response);
      } else {
         const data = await ProductModel.find({
            name: { $regex: search, $options: 'i' },
         })
            .skip(skip)
            .limit(PAGE_SIZE_MENU);

         const dataCount = await ProductModel.countDocuments({ name: { $regex: search, $options: 'i' } });

         const response = {
            pageCount: Math.ceil(dataCount / PAGE_SIZE_MENU),
            data,
         };

         return responseSuccess(res, response);
      }
   } catch (error) {
      return responseError(res, error);
   }
};

// *************************************** API BOOKING PAGE ***************************************

export const bookingProducts = async (req, res) => {
   try {
      const page = parseInt(req.query.page) || 1;
      const skip = (page - 1) * PAGE_SIZE_MENU;
      const search = req.query.q || '';

      if (page < 1) page = 1;

      if (req.query.categoryId) {
         const categoryId = req.query.categoryId;

         const data = await ProductModel.find({
            categoryId,
            name: { $regex: search, $options: 'i' },
         })
            .skip(skip)
            .limit(PAGE_SIZE_MENU);

         const dataCount = await ProductModel.countDocuments({ categoryId, name: { $regex: search, $options: 'i' } });

         const response = {
            pageCount: Math.ceil(dataCount / PAGE_SIZE_MENU),
            data,
         };

         return responseSuccess(res, response);
      } else {
         const data = await ProductModel.find({
            name: { $regex: search, $options: 'i' },
         })
            .skip(skip)
            .limit(PAGE_SIZE_MENU);

         const dataCount = await ProductModel.countDocuments({ name: { $regex: search, $options: 'i' } });

         const response = {
            pageCount: Math.ceil(dataCount / PAGE_SIZE_MENU),
            data,
         };

         return responseSuccess(res, response);
      }
   } catch (error) {
      return responseError(res, error);
   }
};
