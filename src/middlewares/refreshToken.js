import jwt from 'jsonwebtoken';
import userSchema from '../models/users.model';
import createToken from './checkAuth';

const checkRefreshToken = (req, res, next) => {
   try {
      const authHeader = req.headers['authorization'];
      if (!authHeader) {
         return res.status(400).json({ message: 'Refresh Token is required' });
      }
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
         return res.status(400).json({ message: 'Invalid Refresh Token' });
      }

      jwt.verify(token, process.env.SECRETKEY_REFRESH, { ignoreExpiration: false }, (err, user) => {
         if (err) {
            if (err.name === 'TokenExpiredError') {
               return res.status(401).json({ message: 'Refresh Token đã hết hạn' });
            } else {
               return res.status(401).json({ message: 'Invalid Refresh Token' });
            }
         }
         const getUser = user._doc;

         console.log(user);

         const token = jwt.sign({ ...getUser }, process.env.SECRETKEY, {
            // set time refesh token
            expiresIn: '30m',
         });

         delete getUser.password; // Xóa thuộc tính 'password' từ đối tượng người dùng
         return res.status(200).json({ message: 'Refresh Token success', token, user: getUser });
      });
   } catch (error) {
      console.log('Error:', error);
      return res.status(400).json({ message: 'Invalid token' });
   }
   next();
};

export default checkRefreshToken;
