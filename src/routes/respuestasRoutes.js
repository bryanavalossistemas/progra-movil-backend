import { Router } from "express";
import { RespuestaController } from "../controllers/RespuestaController.js";

export const respuestasRoutes = Router();

// Obtener todas las respuestas
respuestasRoutes.get("/", RespuestaController.obtenerTodasLasRespuestas);

// Obtener respuestas por pregunta
respuestasRoutes.get("/pregunta/:id_pregunta", RespuestaController.EncontrarRespuestasporPregunta);
