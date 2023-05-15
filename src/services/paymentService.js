
export const createPayment = async (paymentInfo, orderId) => {
  const url = `/api/orders/${orderId}/payment`;
  const infoToJson = JSON.stringify(paymentInfo)
    const sendPayment = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: infoToJson,
    })

    const res = await sendPayment.json()
return res
};
