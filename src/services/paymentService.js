
export const createPayment = async (paymentInfo) => {
  const url = '/transaction/payment';
    const sendPayment = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: paymentInfo,
    })

    const res = await sendPayment.json()
    console.log('RES', await res);
return res
};
