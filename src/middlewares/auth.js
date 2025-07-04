import jwt from "jsonwebtoken";
import { Usuario } from "../models/Usuario.js";

export const authenticate = async (req, res, next) => {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) {
      throw Error;
    }

    const [, token] = bearer.split(" ");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === "object" && decoded.id) {
      const user = await Usuario.findByPk(decoded.id);
      if (!user) {
        throw Error;
      }
      req.usuario = user;
      next();
      console.log("✅ Usuario asignado en req.usuario:", user);
    }
  } catch (error) {
    return res.status(500).json({
      error: "No autenticado",
    });
  }
};

export const authorize = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.role !== "ADMIN") {
      throw Error;
    }
    next();
  } catch (error) {
    return res.sendStatus(500);
  }
};
