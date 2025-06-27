import jwt from "jsonwebtoken";

export function generarJWT(payload) {
  const token = jwt.sign(payload, "palabrasupersecreta", {
    expiresIn: "180d",
  });
  return token;
}
