import {
  createTransaction,
  getWompiToken,
  checkTransactionStatus,
} from "../payment/wompiService.js";

const paymentRequest = async (paymentInfo) => {
  const wompiTemplate = {
    tarjetaCreditoDebido: {
      numeroTarjeta: paymentInfo.cardNumber,
      cvv: paymentInfo.cvv,
      mesVencimiento: paymentInfo.expirationDate.month,
      anioVencimiento: `20${paymentInfo.expirationDate.year}`,
    },
    monto: paymentInfo.charge,
    urlRedirect: "http://localhost:5000/order-confirmation",
    nombre: paymentInfo.fullName.firstName,
    apellido: paymentInfo.fullName.lastName,
    email: paymentInfo.email,
    ciudad: paymentInfo.city,
    direccion: paymentInfo.address,
    idPais: paymentInfo.country,
    idRegion: paymentInfo.state,
    codigoPostal: paymentInfo.zipcode,
    telefono: paymentInfo.phoneNumber,
  };

  const token = await getWompiToken()
  const orderCreation = await createTransaction(wompiTemplate, token);
  
  return orderCreation
};

export default paymentRequest;
