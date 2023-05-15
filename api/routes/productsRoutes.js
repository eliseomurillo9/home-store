import { Router } from 'express';
const router = Router();
import productController from '../controllers/productController.js';
import { isAuthorized } from '../auth/auth.js';


router.route('/').get(productController.getProducts);
router.route('/:id').get(productController.getProduct);
router.route('/').post(isAuthorized, productController.postProduct);


export default router;