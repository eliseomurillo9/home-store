import dotenv from "dotenv";
dotenv.config();

const getWompiToken = async () => {
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
  const elSalvadorId = "SV";

  try {
    const fetchFieldValues = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "*/*",
        Authorization: await getWompiToken(),
      },
    });

    const res = await fetchFieldValues.json();
    const getFieldValues = res.find((country) => country.id === elSalvadorId);

    return getFieldValues;
  } catch (error) {
    console.log(error);
  }
};

export const createTransaction = (body, token) => {
  const url = `${process.env.WOMPI_BASE_URL}TransaccionCompra/3Ds`;
  return body, token
}
