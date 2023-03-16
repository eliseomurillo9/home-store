import express from 'express';
const router = express.Router();
import subCategoryController from '../controllers/subCategoryController.js';

router.route('/').get(subCategoryController.getSubCategory);
router.route('/').post(subCategoryController.postSubCategory);

export default router;