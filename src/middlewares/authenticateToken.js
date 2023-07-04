import jwt from 'jsonwebtoken';
import userSchema from '../models/users.model';

const authenticateToken = (req, res, next) => {
   try {
      const authHeader = req.headers['authorization'];
      if (!authHeader) {
         return res.status(400).json({ message: 'Token is required' });
      }
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) {
         return res.status(400).json({ message: 'Invalid token' });
      }

      jwt.verify(token, process.env.SECRETKEY, { ignoreExpiration: false }, (err, user) => {
         if (err) {
            if (err.name === 'TokenExpiredError') {
               return res.status(401).json({ message: 'Token đã hết hạn' });
            } else {
               return res.status(401).json({ message: 'Invalid token' });
            }
         }
         const getUser = user._doc;
         delete getUser.password; // Xóa thuộc tính 'password' từ đối tượng người dùng
         res.locals.user = getUser;
         next(); // Đảm bảo gọi next() trước khi kết thúc hàm
      });
   } catch (error) {
      console.log('Error:', error);
      return res.status(400).json({ message: 'Invalid token' });
   }
};

export default authenticateToken;
