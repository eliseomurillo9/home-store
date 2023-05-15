import Order from "../models/OrderModel.js";
import { createTransaction, getWompiToken } from "../payment/wompiService.js";
import _ from "lodash";

const paymentRequest = async (orderId, paymentInfo) => {
  const orderDTO = await getOrder(orderId);
  if (!orderDTO) {
    return {
      error: {
        status: 404,
        message: "La orden no existe",
      },
    };
  }
  const wompiTemplate = {
    tarjetaCreditoDebido: {
      numeroTarjeta: paymentInfo.cardNumber,
      cvv: paymentInfo.cvv,
      mesVencimiento: paymentInfo.expirationDate.month,
      anioVencimiento: `20${paymentInfo.expirationDate.year}`,
    },
    monto: paymentInfo.charge,
    urlRedirect: `http://localhost:5000/confirmacion-orden?orderId=${orderId}`,
    nombre: paymentInfo.firstName,
    apellido: paymentInfo.lastName,
    email: paymentInfo.email,
    ciudad: paymentInfo.city,
    direccion: paymentInfo.addressLine1,
    idPais: paymentInfo.country,
    idRegion: paymentInfo.state,
    codigoPostal: paymentInfo.zipCode,
    telefono: paymentInfo.mobilePhone,
  };

  const token = await getWompiToken();
  const wompiTransaction = await createTransaction(wompiTemplate, token);

  orderDTO.overall_status = "PENDING-PAYMENT";
  const paymentInfoItem = {
    source: "WOMPISV",
    type: "PENDING",
    transaction_id: wompiTransaction.idTransaccion,
    amount_in_usd: wompiTransaction.monto,
    payment_service_response_dump: { ...wompiTransaction },
  };
  if (orderDTO.payment_info?.length >= 0) {
    orderDTO.payment_info.push(paymentInfoItem);
  } else {
    orderDTO.payment_info = [paymentInfoItem];
  }

  await orderDTO.save();
  return wompiTransaction;
};

const paymentConfirmationService = async (orderId, transactionId) => {
  const orderDTO = await getOrder(orderId);
  if (!orderDTO) {
    return {
      error: {
        status: 404,
        message: "La orden no existe",
      },
    };
  }
  const url = `${process.env.WOMPI_BASE_URL}TransaccionCompra/${transactionId}`;
  const token = await getWompiToken();
  const shopStatus = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "*/*",
      Authorization: token,
    },
  });
  const response =  await shopStatus.json()

  const paymentInfoItem = {
    source: "WOMPISV",
    transaction_id: response.idTransaccion,
    amount_in_usd: response.monto,
    payment_service_response_dump: { ...response },
  };

  if (response.esAprobada) {
    orderDTO.overall_status = "RECEIVED";
    paymentInfoItem.type = "SALE";
  } else {
    orderDTO.overall_status = "PENDING-PAYMENT";
    paymentInfoItem.type = "FAILED";
  }

  if (orderDTO.payment_info?.length >= 0) {
    orderDTO.payment_info.push(paymentInfoItem);
  } else {
    orderDTO.payment_info = [paymentInfoItem];
  }

  await orderDTO.save();

  return response ;
};

const createOrder = async ({ products, mailing_address, user_email }) => {
  const cartPrice = _.sum(
    products?.map((product) => product.price * product.quantity)
  ).toFixed(2);
  const newOrder = new Order({
    overall_status: "CREATED",
    mailing_address,
    user_email: user_email.toString(),
    cart: {
      products,
      totalPrice: cartPrice,
    },
  });
  const saveNewOrder = await newOrder.save();
  return saveNewOrder;
};

const getOrder = async (orderid) => {
  const orderInfo = await Order.findById(orderid);
  return orderInfo;
};

const modifyOrder = async ({ orderid, orderInfo }) => {
  const getInfoAndModify = findByIdAndUpdate(orderid, orderInfo);
  return getInfoAndModify;
};
export {
  paymentRequest,
  paymentConfirmationService,
  createOrder,
  getOrder,
  modifyOrder,
};
