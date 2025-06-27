import { Router } from "express";
import { InsigniasController } from "../controllers/InsigniasController.js";

export const insigniaRoutes = Router();

// Rutas CRUD
insigniaRoutes.post("/", InsigniasController.crearInsignia);
insigniaRoutes.get("/", InsigniasController.obtenerInsignias);
insigniaRoutes.get("/:id", InsigniasController.obtenerInsigniaPorId);
insigniaRoutes.get("/usuario/:id", InsigniasController.verInsignias);
insigniaRoutes.delete("/usuario/:id", InsigniasController.verInsignias);
insigniaRoutes.put("/:id", InsigniasController.actualizarInsignia);
// Ruta de evaluación de insignias (sin autenticación por ahora)
insigniaRoutes.post("/evaluar", InsigniasController.evaluar);
