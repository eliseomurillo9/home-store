import express from 'express';
const router = express.Router();
import categoryController from '../controllers/categoryController.js';
import { isAuthorized } from '../auth/auth.js';

router.route('/').get(categoryController.getCategories);
router.route('/').post(isAuthorized, categoryController.postCategory);

export default router;