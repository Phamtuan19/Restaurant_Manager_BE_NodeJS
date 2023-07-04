import CategoriesModel from '../models/categories.model';

class CategoriesRepository {
   async findById(id) {
      return CategoriesModel.findById(id);
   }

   async read() {
      return CategoriesModel.find({}).select('_id, name');
   }

   async create(data) {
      return await new CategoriesModel(data).save();
   }

   async update(id, data) {
      return CategoriesModel.findByIdAndUpdate(id, data, { new: true });
   }

   async delete(id) {
      return CategoriesModel.findByIdAndDelete(id);
   }


}

const categoriesRepository = new CategoriesRepository();
export default categoriesRepository;
