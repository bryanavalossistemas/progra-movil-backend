import { InsigniasNivelController } from "../controllers/InsigniaNivelController.js";
import { Router } from "express";

export const InsigniaNivelRoutes = Router();

// Ruta: /api/insignias-nivel/asignar/:idusuario/:idnivel
InsigniaNivelRoutes.get("/:idusuario/:idnivel",InsigniasNivelController.asignarInsigniaPorNivel);