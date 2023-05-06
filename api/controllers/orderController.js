import {
  paymentConfirmationService,
  paymentRequest,
  createOrder,
  getOrder,
} from "../services/orderService.js";

const paymentAuthorization = async (req, res, next) => {
  try {
    const paymentResponse = await paymentRequest(req.params.id, req.body);
    if (paymentResponse.error) {
      res.status(paymentResponse.error.status).json(paymentResponse.error);
    }
    return res.status(200).json(paymentResponse);
  } catch (error) {
    next(error);
  }
};

const paymentConfirmation = async (req, res, next) => {
  try {
    const paymentResponse = await paymentConfirmationService(
      req.params.id,
      req.body.transactionId
    );
    if (paymentResponse.error) {
      res.status(paymentResponse.error.status).json(paymentResponse.error);
    }
    return res.status(200).json(paymentResponse);
  } catch (error) {
    next(error);
  }
};

const orderCreation = async (req, res) => {
  try {
    const order = await createOrder({
      products: req.body.products,
      mailing_address: req.body.mailing_address,
      user_email: req.body.user_email,
    });
    return res.status(200).json(order);
  } catch (err) {
    throw new Error(err);
  }
};

const orderGetter = async (req, res) => {
  try {
    const order = await getOrder(req.params.id.toString());
    return res.status(200).json(order);
  } catch (error) {
    throw new Error(error);
  }
};

const orderModifier = async (req, res) => {
  try {
    const order = await modifyOrder({
      orderid: req.params.id,
      orderInfo: req.body,
    });
    return res.status(200).json(order);
  } catch (error) {
    throw new Error(error);
  }
};

export {
  paymentAuthorization,
  paymentConfirmation,
  orderCreation,
  orderGetter,
  orderModifier,
};
