import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema(
   {
      name: { type: String, required: true },
   },
   {
      timestamps: true,
   },
);

CategoriesSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('categories', CategoriesSchema);
