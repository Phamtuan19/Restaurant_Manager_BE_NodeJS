import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const TableBookSchema = new Schema(
   {
      tableId: { type: String, required: true },
      receivingTime: { type: Date, require: true },
      listProduct: [
         {
            quantity: { type: Number, default: 1 },
            price: { type: Number },
            productId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'products',
               autopopulate: { select: 'name' },
            },
         },
      ],
      partySize: { type: Number },
      totalPrice: {
         type: Number,
         required: true,
         default: 0,
      },
      note: { type: String },
      statusId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'statusInvoice',
         default: '64a436061f76c82cd0d0a2eb',
         autopopulate: { select: 'name' },
      },
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'users',
         autopopulate: { select: 'name' },
      },
      userName: { type: String },
      phone: { type: String },
      staffId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'users',
         autopopulate: { select: 'name' },
      },
   },
   {
      timestamps: true,
   },
);

TableBookSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('tableBook', TableBookSchema);
