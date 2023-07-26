import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const StatusInvoicechema = new Schema(
   {
      name: {
         type: String,
         required: true,
      },
      description: {
         type: String,
      },
   },
   {
      timestamps: true,
   },
);

StatusInvoicechema.plugin(mongooseAutoPopulate);

export default mongoose.model('statusInvoice', StatusInvoicechema);
