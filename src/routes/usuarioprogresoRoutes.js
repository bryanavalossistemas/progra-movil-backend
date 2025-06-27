import { UsuarioProgresoController} from "../controllers/UsuarioProgresoController.js";
import { Router } from "express";


export const usuarioProgresoRoutes = Router();

usuarioProgresoRoutes.get("/", UsuarioProgresoController.obtenerProgresoPorUsuarioYNivel);
usuarioProgresoRoutes.post("/:id_usuario/:id_nivel", UsuarioProgresoController.crearProgreso);