import { Router } from 'express';
const router = Router();
import productController from '../controllers/productController.js';

router.route('/').get(productController.getProducts);
router.route('/:id').get(productController.getProduct);
router.route('/').post(productController.postProduct);


export default router;