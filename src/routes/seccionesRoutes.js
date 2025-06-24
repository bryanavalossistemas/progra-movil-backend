import { SeccionesController } from "../controllers/SeccionController.js";
import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.js";

export const seccionesRoutes = Router();


seccionesRoutes.get("/", SeccionesController.EncontrarSecciones);

seccionesRoutes.get("/:id_Modulo", SeccionesController.EncontrarSeccionesPorModulos);
