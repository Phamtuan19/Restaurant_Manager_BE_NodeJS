import ProductModel from '../models/products.model';

class ProductRepository {
   async findById(id) {
      return ProductModel.findById(id);
   }

   async read() {
      return ProductModel.find({});
   }
   
   async index(categoryId, search) {
      return ProductModel.find({ categoryId: categoryId, name: { $regex: search, $options: 'i' } });
   }

   async create(data) {
      return await new ProductModel(data).save();
   }

   async update(id, data) {
      return ProductModel.findByIdAndUpdate(id, data, { new: true });
   }

   async delete(id) {
      return ProductModel.findByIdAndDelete(id);
   }
}

const productRepository = new ProductRepository();
export default productRepository;
