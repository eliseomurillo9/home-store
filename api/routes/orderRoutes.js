import express from 'express';
const router = express.Router();
import orderController from '../controllers/orderController.js';

router.route('/payment').post(orderController.paymentAuthorization());

export default router;