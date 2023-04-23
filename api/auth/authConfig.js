
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET_CODE,
  baseURL: "http://localhost:5000",
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

export default config;
