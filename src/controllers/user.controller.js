import { trace } from 'joi';
import { responseError, responseSuccess } from '../helpers/response';
import UserSchema from '../models/users.model';
import bcrypt from 'bcrypt';
import userRepository from '../repositories/user.repository';

// *************************************** API ADMIN ***************************************

export const login = async (req, res) => {
   try {
      res.status(200).json({ message: 'Login success' });
   } catch (error) {
      res.status(200).json({ message: 'Login failed', error });
   }
};

// func Validate register
export const validate = (data) => {
   const rule = Joi.object({
      fullname: Joi.string().min(6).max(225).required(),
      email: Joi.string().min(6).max(225).required(),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,20}$')).required(),
      isAdmin: Joi.boolean(),
      phone: Joi.number(),
   });
   return rule.validate(data);
};

// [POST] register user
export const register = async (req, res) => {
   try {
      const body = req.body;
      const user = await UserSchema(body).save();
      return res.status(200).json({ message: 'Đăng ký thành công!', user });
   } catch (error) {
      res.status(400).json({ message: 'Đăng ký không thành công!', error });
      console.log(error);
   }
};

// [POST] create user
export const create = async (req, res) => {
   try {
      const body = req.body;
      const data = await modelUser({ ...body, role_id: 2 }).save();

      const response = {
         data,
         message: 'Tạo class thành công',
      };

      return responseSuccess(res, response);
   } catch (error) {
      return responseError(res, error);
   }
};

const authorization = () => {
   try {
   } catch (error) {
      res.status(400).json({ message: 'wrong Token', error });
   }
};

// [GET] all project
export const getAll = async (req, res) => {
   try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const search = req.query.search || '';
      const perPage = limit * page - limit;
      const project = await modelUser
         .find({
            name: { $regex: search, $options: 'i' },
         })
         .skip(perPage)
         .limit(limit);
      const total = await Auth.countDocuments({
         name: { $regex: search, $options: 'i' },
      });
      const totalPage = Math.ceil(total / limit);
      return res.status(200).json({
         data: project,
         total,
         totalPage,
         currentPage: page,
      });
   } catch (error) {
      console.log(error);
   }
};

// *************************************** API COMMON ***************************************

// [GET]
export const getUser = async (req, res) => {
   try {
      const user = await UserSchema.findById(res.locals.user._id);

      res.status(200).json({ message: 'Login success', data: user });
   } catch (error) {
      res.status(200).json({ message: 'Login failed', error });
   }
};

// [PUT] change password
export const changePassword = async (req, res) => {
   try {
      const { currentPassword, newPassword } = req.body;

      const user = await UserSchema.findById(res.locals.user._id);

      if (!user) return responseError(res, { message: 'Người dùng không tồn tại!' });

      if (!user.authenticate(currentPassword)) return responseError(res, { message: 'Mật khẩu không chính xác!' });

      user.password = newPassword;
      await user.save();

      return responseSuccess(res, { message: 'Thay đổi mật khẩu thành công.' });
   } catch (error) {
      return responseError(res, error);
   }
};

// [PUT] edit
export const update = async (req, res) => {
   try {
      const body = req.body;

      const user = await UserSchema.findById(res.locals.user._id);

      await userRepository.updateUser(res.locals.user._id, body);

      return responseSuccess(res, { message: 'Cập nhật thành công.' });
   } catch (error) {
      return responseError(res, error);
   }
};

export const refreshToken = async (req, res) => {};
