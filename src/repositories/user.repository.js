import UserSchema from '../models/users.model';
import bcrypt from 'bcrypt';

class UserRepository {
   async findById(userId) {
      return UserSchema.findById(userId);
   }

   async findByEmail(email) {
      return UserSchema.findOne({ email });
   }

   async createUser(userData) {
      return UserSchema.create(userData);
   }

   async updateUser(userId, userData) {
      return UserSchema.findByIdAndUpdate(userId, userData, { new: true });
   }

   async deleteUser(userId) {
      return UserSchema.findByIdAndDelete(userId);
   }
}

const userRepository = new UserRepository();

export default userRepository;
