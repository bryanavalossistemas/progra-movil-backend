import { ModulosController} from "../controllers/ModulosController.js";
import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.js";

export const modulosRoutes = Router();

modulosRoutes.get("/", ModulosController.EncontrarModulos);
modulosRoutes.get("/:id_Modulo",ModulosController.obtenerEstructuraCompleta)