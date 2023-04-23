import subCategoryService from '../services/subCategoryService.js';

const getSubCategory = async (req, res, next) => {
    try {
        const subCategory = await subCategoryService.getSubCategory();
        return res.status(200).json(subCategory);
    } catch(err) {
        next(err)
    }
};
  
const postSubCategory = async (req, res, next) => {
    try{
        const subCategory = await subCategoryService.postSubCategory(req.body);
        return res.status(200).json(subCategory);
    }catch(err) {
        next(err)
    }
};

export default { getSubCategory, postSubCategory };