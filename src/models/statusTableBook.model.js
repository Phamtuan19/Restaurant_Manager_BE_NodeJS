import mongoose from 'mongoose';
import mongooseAutoPopulate from 'mongoose-autopopulate';

const Schema = mongoose.Schema;

const StatusTableBookSchema = new Schema(
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

StatusTableBookSchema.plugin(mongooseAutoPopulate);

export default mongoose.model('statusTableBook', StatusTableBookSchema);
