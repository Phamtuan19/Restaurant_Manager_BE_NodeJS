import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const RoleSchema = new Schema({
   name: {
      type: String,
      required: true,
   },
});

RoleSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('roles', RoleSchema);
