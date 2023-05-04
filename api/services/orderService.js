import {createTransaction} from '../payment/wompiService.js'

const paymentRequest = () => {
    const orderCreation = createTransaction('hola', '245323453254345345345');
    console.log('WORKING');
    return orderCreation
}

export default paymentRequest