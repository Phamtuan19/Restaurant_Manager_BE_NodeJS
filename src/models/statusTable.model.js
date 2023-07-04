import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const StatusTableSchema = new Schema(
   {
      name: {
         type: String,
         require: true,
      },
      description: {
         type: String,
      },
   },
   {
      timestamps: true,
   },
);

StatusTableSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('statusTable', StatusTableSchema);
