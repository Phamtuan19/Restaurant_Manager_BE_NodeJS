import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const UserSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
      },
      phone: {
         type: String,
      },
      image: {
         type: String,
      },
      address: {
         type: String,
      },
      role_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'roles',
         require: true,
         autopopulate: { select: 'name' },
      },
   },
   {
      timestamps: true,
   },
);

UserSchema.pre('save', function (next) {
   this.password = this.bcryptPassword(this.password);
   next();
});

UserSchema.methods = {
   bcryptPassword(password) {
      if (!password) return '';
      return bcrypt.hashSync(password, 10);
   },
   authenticate(password) {
      return bcrypt.compareSync(password, this.password);
   },
};

UserSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('users', UserSchema);
