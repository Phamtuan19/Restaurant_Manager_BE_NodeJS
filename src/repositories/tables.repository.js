import TableModel from '../models/tables.model';

class TableRepository {
   async findById(id) {
      return TableModel.findById(id);
   }

   async read() {
      return TableModel.find({});
   }

   async create(data) {
      return await new TableModel(data).save();
   }

   async update(id, data) {
      return TableModel.findByIdAndUpdate(id, data, { new: true });
   }

   async delete(id) {
      return TableModel.findByIdAndDelete(id);
   }
}

const tableRepository = new TableRepository();
export default tableRepository;
