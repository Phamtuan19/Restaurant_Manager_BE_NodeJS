import UserSchema from "../models/users.model"
import bcrypt from "bcrypt";

class UserRepository {
   async findById(userId) {
      return modelUser.findById(userId)
   }

   async findByEmail(email) {
      return modelUser.findOne({ email })
   }

   async createUser(userData) {
      return modelUser.create(userData)
   }

   async updateUser(userId, userData) {
      return modelUser.findByIdAndUpdate(userId, userData, { new: true })
   }

   async deleteUser(userId) {
      return modelUser.findByIdAndDelete(userId)
   }
}

const userRepository = new UserRepository()

export default userRepository
