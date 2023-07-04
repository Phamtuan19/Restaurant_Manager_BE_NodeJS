import jwt from 'jsonwebtoken';
import UserSchema from '../models/users.model';
const checkAuth = async (req, res, next) => {
   try {
      const { email, password } = req.body;
      const existUser = await UserSchema.findOne({ email });
      if (!existUser) {
         return res.status(400).json({ message: 'Email not found' });
      }

      if (!existUser.authenticate(password)) {
         return res.status(400).json({ message: 'wrong password' });
      }
      const token = jwt.sign({ ...existUser }, process.env.SECRETKEY, {
         // set time refesh token
         expiresIn: '1d',
      });
      const refreshToken = jwt.sign({ ...existUser }, process.env.SECRETKEY_REFRESH, {
         expiresIn: '3d',
      });

      existUser.password = '';
      // const roleName = existUser.role_id.name;

      return res.status(200).json({
         message: 'Login success',
         token,
         refreshToken,
         user: existUser,
      });
   } catch (error) {
      return res.status(400).json({ message: 'Login faileds', error });
   }

   next();
};

export default checkAuth;
