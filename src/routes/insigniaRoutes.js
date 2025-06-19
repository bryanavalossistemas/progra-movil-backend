import { Router } from "express";
import { InsigniasController } from "../controllers/InsigniasController.js";

export const insigniaRoutes = Router();

// Rutas CRUD
insigniaRoutes.post("/", InsigniasController.crearInsignia);
insigniaRoutes.get("/", InsigniasController.obtenerInsignias);
insigniaRoutes.get("/:id", InsigniasController.obtenerInsigniaPorId);
insigniaRoutes.put("/:id", InsigniasController.actualizarInsignia);
insigniaRoutes.delete("/:id", InsigniasController.eliminarInsignia);

// Ruta de evaluación de insignias (sin autenticación por ahora)
insigniaRoutes.post("/evaluar", InsigniasController.evaluar);
