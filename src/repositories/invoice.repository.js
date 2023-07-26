import InvoiceModel from '../models/invoice.model';

class InvoiceRepository {
   async findById(id) {
      return InvoiceModel.findById(id);
   }

   async read() {
      return InvoiceModel.find({});
   }

   async index(categoryId, search) {
      return InvoiceModel.find({ categoryId: categoryId, name: { $regex: search, $options: 'i' } });
   }

   async create(data) {
      return await new InvoiceModel(data).save();
   }

   async update(id, data) {
      return InvoiceModel.findByIdAndUpdate(id, data, { new: true });
   }

   async delete(id) {
      return InvoiceModel.findByIdAndDelete(id);
   }
}

const invoiceRepository = new InvoiceRepository();
export default invoiceRepository;
