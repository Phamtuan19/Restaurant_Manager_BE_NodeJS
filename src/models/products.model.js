import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      categoryId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'categories',
         autopopulate: { select: 'name' },
      },
      costCapital: {
         type: Number,
         required: true,
      },
      price: {
         type: Number,
         required: true,
      },
      priceSale: {
         type: Number,
      },
      description: {
         type: String,
      },
      image: {
         type: String,
         required: true,
      },
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'users',
         require: true,
         autopopulate: { select: 'name' },
      },
   },
   {
      timestamps: true,
   },
);

ProductSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('products', ProductSchema);
