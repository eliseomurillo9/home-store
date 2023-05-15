import express from 'express';
const router = express.Router();
import subCategoryController from '../controllers/subCategoryController.js';
import { isAuthorized } from '../auth/auth.js';

router.route('/').get(subCategoryController.getSubCategory);
router.route('/').post(isAuthorized, subCategoryController.postSubCategory);

export default router;