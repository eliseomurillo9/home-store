import express from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController.js';

router.route('/').get(categoryController.getCategories);
router.route('/').post(categoryController.postCategory);

export default router;