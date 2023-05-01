import jwksClient from "jwks-rsa";
import jwt from "jsonwebtoken";

export async function isAuthorized(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ message: "Missing or invalid authorization header" });
  }
  const token = authHeader.split(" ")[1];

  try {
    var client = jwksClient({
      jwksUri:
        "https://dev-ivwetbsasozkjxc7.us.auth0.com/.well-known/jwks.json",
    });
    async function getKey(header, callback) {
      client.getSigningKey(header.kid, function (err, key) {
        var signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      });
    }
    var decoded = await jwt.verify(token, getKey, function (err, decoded) {
      if (err) throw err;

      console.log("DECODED IF ALL OK", err, decoded);
      if (!decoded.permissions?.includes("admin"))
        return res
          .status(403)
          .json({ message: "Token does not have enough permissions" });

      next();
    });
  } catch (err) {
    console.log("err", err);
    return res
      .status(401)
      .json({ message: "Token has expired or is not authorized" });
  }
}
