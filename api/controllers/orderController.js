import paymentRequest from '../services/orderService.js';

const paymentAuthorization =  (req, res, err) => {
    if (err) throw err;

    try {
        const payment = paymentRequest();
        return res.status(200).json(payment)
    } catch (error) {
       console.log(error);
    }
    
}

export default {paymentAuthorization};