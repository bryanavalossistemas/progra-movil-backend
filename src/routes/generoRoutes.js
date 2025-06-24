import { GeneroController} from "../controllers/GeneroController.js";
import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.js";

export const generoRoutes = Router();

generoRoutes.get("/", GeneroController.obtenerTodosLosGeneros);