import { NivelesController } from "../controllers/NivelesController.js";
import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.js";

export const nivelesRoutes = Router();


nivelesRoutes.get("/", NivelesController.EncontrarNiveles);

nivelesRoutes.get("/:id_seccion", NivelesController.EncontrarNivelesPorSeccion);