import { UsuarioProgresoController} from "../controllers/UsuarioProgresoController.js";
import { Router } from "express";


export const usuarioProgresoRoutes = Router();

usuarioProgresoRoutes.get("/:id_usuario/:id_nivel", UsuarioProgresoController.crearProgreso);
usuarioProgresoRoutes.post("/", UsuarioProgresoController.obtenerProgresoPorUsuarioYNivel);