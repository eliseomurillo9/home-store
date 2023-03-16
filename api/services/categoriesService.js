import Category from '../models/CategoryModel.js';

const getCategories = async () => {
    try{
        const categories = Category.find();
        return categories
    } catch(err) {
        console.log(err);
    }
}
 
const postCategory = async (categoryInfo) => {
    try {
        const category = new Category(categoryInfo);
        await category.save()
    
        return categoryInfo;
    } catch(error) {
        console.log(error);
    }
};

export default { getCategories, postCategory };