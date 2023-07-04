import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const TableSchema = new Schema(
   {
      floor_id: {
         type: Number,
      },
      area_id: {
         type: Number,
      },

      index: {
         type: Number,
         require: true,
      },
      totalUser: {
         type: Number,
         require: true,
      },
      description: {
         type: String,
      },
      statusId: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'statusTable',
         require: true,
         autopopulate: { select: 'name' },
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

TableSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('tables', TableSchema);
