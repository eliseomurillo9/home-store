import {Router} from 'express';
const router = Router();
import {orderCreation, orderGetter, paymentAuthorization, paymentConfirmation, orderModifier} from '../controllers/orderController.js';

router.route('/:id/payment').post(paymentAuthorization);
router.route('/:id/payment-confirmation').post(paymentConfirmation);
router.route('/').post(orderCreation);
router.route('/:id').get(orderGetter);
router.route('/:id').put(orderModifier)

export default router;