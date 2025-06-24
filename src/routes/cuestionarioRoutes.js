import { CuestionarioController} from "../controllers/CuestionariosController.js";
import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.js";

export const cuestionarioRoutes = Router();

cuestionarioRoutes.get("/:id_nivel", CuestionarioController.obtenerCuestionarioPorNivel);
