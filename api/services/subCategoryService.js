import SubCategory from '../models/SubCategoryModel.js';

const getSubCategory = async () => {
    const subCategories = await SubCategory.find();
    return subCategories;
};

const postSubCategory = async (subCategoryInfo) => {
        const subCategory = new SubCategory(subCategoryInfo);
        await subCategory.save();
        return subCategory;
};

export default { getSubCategory, postSubCategory };