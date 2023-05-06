import { Router } from 'express';
const router = Router();
import productController from '../controllers/productController.js';
import upload from '../db/uploader.js';


router.route('/products').get(productController.getProducts);
router.route('/product/:id').get(productController.getProduct);
router.route('/products').post(productController.postProduct);


export default router;