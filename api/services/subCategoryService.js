import SubCategory from '../models/SubCategoryModel.js';

const getSubCategory = async () => {
    const subCategories = await SubCategory.find();
    return subCategories;
};

const postSubCategory = async (subCategoryInfo) => {
    try {
        const subCategory = new SubCategory(subCategoryInfo);
        await subCategory.save()
    
        return subCategoryInfo;
    } catch(error) {
        console.log(error);
    }
};

export default { getSubCategory, postSubCategory };