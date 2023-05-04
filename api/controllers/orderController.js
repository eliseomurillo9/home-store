import paymentRequest from '../services/orderService.js';

const paymentAuthorization = async (req, res, next) => {
    try {
        const payment = await paymentRequest(req.body);
        return res.status(200).json(payment)
    } catch (error) {
       next(error)
    }
    
}

export default {paymentAuthorization};