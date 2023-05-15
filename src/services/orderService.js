
const createOrder = async ({ address, email, cartProducts }) => {
  const order = {
    mailing_address: address,
    user_email: email,
    products: cartProducts,
  };
  const url = "/api/orders";
  const sendOrder = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  const jsonResponse = await sendOrder.json();
  return jsonResponse;
};

const getOrder = async ({orderId}) => {
    const url = `/api/orders/${orderId}`;
    const orderInfo = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonResponse = await orderInfo.json();
    return jsonResponse;
  };

  const modifyOrder = async ({ orderId, address, email, cartProducts }) => {
    const url = `/api/orders/${orderId}`;
    const order = {
      mailing_address: address,
      user_email: email,
      products: cartProducts,
    };
    const orderInfo = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    const jsonResponse = await orderInfo.json();
    return jsonResponse;
  }
export { createOrder, getOrder };
