import dotenv from "dotenv";
dotenv.config();

export const getWompiToken = async () => {
  const url = process.env.WOMPI_TOKEN_ENDPOINT;
  const values = {
    grant_type: "client_credentials",
    client_id: process.env.CLIENT_ID_WOMPI,
    client_secret: process.env.CLIENT_SECRET,
    audience: "wompi_api",
  };

  const formData = new FormData();
  for (const key in values) {
    formData.append(key, values[key]);
  }

  const data = new URLSearchParams(formData);
  try {
    const getToken = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });
    const res = await getToken.json();
    return `${res.token_type} ${res.access_token}`;
  } catch (error) {
    console.log("error", error);
  }
};

export const getElSalvadorRegionsField = async () => {
  const url = `${process.env.WOMPI_BASE_URL}api/Regiones`;

  try {
    const fetchFieldValues = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: await getWompiToken(),
      },
    });

    const res = await fetchFieldValues.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createTransaction = async (paymentInfo, token) => {
  const url = `${process.env.WOMPI_BASE_URL}TransaccionCompra/3Ds`;
  const infoToJson = JSON.stringify(paymentInfo);
  const transactionBuilder = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      Authorization: token,
    },
    body: infoToJson,
  });

  const response = await transactionBuilder.json();
  if (!response.idTransaccion) {
    throw new Error(response.mensajes);
  } else {
    return response;
  }
};

export const checkTransactionStatus = async (transactionId) => {
  const url = `${process.env.WOMPI_BASE_URL}TransaccionCompra/${transactionId}`;
const token = await getWompiToken()
  const shopStatus = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "*/*",
      Authorization: token,
    },
  });

  return shopStatus;
};
