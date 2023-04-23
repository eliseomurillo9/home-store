import categoriesService from '../services/categoriesService.js';

const getCategories = async (req, res, next) => {
    try {
        const categories = await categoriesService.getCategories();
        return res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

const postCategory = async (req, res, next) => {
    try {
        const category = await categoriesService.postCategory(req.body);
        return res.status(200).json(category);
    } catch (error) {
        next(error);
    }
}

export default { getCategories, postCategory };