import subCategoryService from '../services/subCategoryService.js';

const getSubCategory = async (req, res, err) => {
    try {
        const subCategory = await subCategoryService.getSubCategory();
        return res.status(200).json(subCategory);
    } catch(err) {
        console.log(err);
    }
};
  
const postSubCategory = async (req, res, err) => {
    try{
        const subCategory = await subCategoryService.postSubCategory(req.body);
        return res.status(200).json(subCategory);
    }catch(err) {
        console.log(err);
    }
};

export default { getSubCategory, postSubCategory };