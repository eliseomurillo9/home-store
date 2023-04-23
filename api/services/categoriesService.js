import Category from '../models/CategoryModel.js';

const getCategories = async () => {
        const categories = Category.find();
        return categories;
}
 
const postCategory = async (categoryInfo) => {
        const category = new Category(categoryInfo);
        await category.save();
        return category;
};

export default { getCategories, postCategory };