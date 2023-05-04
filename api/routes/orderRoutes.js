import {Router} from 'express';
const router = Router();
import orderController from '../controllers/orderController.js';

router.route('/payment').post(orderController.paymentAuthorization);

export default router;