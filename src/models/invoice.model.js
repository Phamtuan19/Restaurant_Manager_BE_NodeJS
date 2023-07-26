import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const InvoiceSchema = new Schema(
   {
      tableId: { type: String },
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
      quantity: {
         type: Number,
         required: true,
      },
      totalPrice: {
         type: Number,
         required: true,
      },
      note: { type: String },
      statusId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'statusTableBook',
         default: '64a67ea84a23681e720da4da',
         required: true,
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
      staffNote: {
         type: String,
      },
      address: {
         type: String,
         required: true,
      },
      // typeId: {
      //    type: mongoose.Schema.Types.ObjectId,
      //    ref: 'invoicetype',
      //    required: true,
      //    autopopulate: { select: 'name' },
      // },
   },
   {
      timestamps: true,
   },
);

InvoiceSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('invoice', InvoiceSchema);
