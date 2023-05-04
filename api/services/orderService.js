import {createTransaction, getWompiToken, checkTransactionStatus} from '../payment/wompiService.js'

const paymentRequest = async (paymentInfo) => {
    const token = await getWompiToken()
    const orderCreation = await createTransaction(paymentInfo, token);

    if (orderCreation.idTransaccion) {
        checkTransactionStatus(orderCreation.idTransaccion, token)
    }
    return orderCreation
}

export default paymentRequest