import { UsuarioController } from "../controllers/UsuarioController.js";
import { Router } from "express";
import { authenticate } from "../middlewares/auth.js";

export const usuarioRoutes = Router();

usuarioRoutes.post("/crear-cuenta", UsuarioController.crearCuenta);

usuarioRoutes.post("/login", UsuarioController.login);

usuarioRoutes.post("/olvide-contrasenia", UsuarioController.olvideContrasenia);

usuarioRoutes.post("/actualizar-contrasenia-con-token", UsuarioController.actualizarContraseniaConToken);

usuarioRoutes.get("/", UsuarioController.obtenerTodosLosUsuarios);

usuarioRoutes.get("/:id", authenticate, UsuarioController.obtenerUsuario);

usuarioRoutes.put("/actualizar-usuario", authenticate, UsuarioController.actualizarUsuario);

