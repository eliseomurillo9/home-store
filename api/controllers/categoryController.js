import categoriesService from '../services/categoriesService.js';

const getCategories = async (req, res) => {
        const categories = await categoriesService.getCategories();
        return res.status(200).json(categories);
};

const postCategory = async (req, res) => {
    try {
        const category = await categoriesService.postCategory(req.body);
        return res.status(200).json(category);
    } catch (error) {
        console.log(error);
    }
}

export default { getCategories, postCategory };