import { UsuarioController } from "../controllers/UsuarioController.js";
import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.js";

export const usuarioRoutes = Router();

usuarioRoutes.post("/crear-cuenta", UsuarioController.crearCuenta);

usuarioRoutes.post("/confirm", UsuarioController.confirmAccount);

usuarioRoutes.post("/login", UsuarioController.login);

usuarioRoutes.post("/request-code", UsuarioController.requestToken);

usuarioRoutes.post("/forgot", UsuarioController.forgotPassword);

usuarioRoutes.post("/validate-token", UsuarioController.validateToken);

usuarioRoutes.post("/update-password/:token", UsuarioController.updatePasswordWithToken);

usuarioRoutes.get("/", UsuarioController.getAllUsers);

usuarioRoutes.get("/createdAt", UsuarioController.getUsersByCreatedAt);

usuarioRoutes.get("/user", authenticate, UsuarioController.getUserAuthenticated);

usuarioRoutes.get("/:id", authenticate, authorize, UsuarioController.getUser);

usuarioRoutes.get("/user/data", authenticate, UsuarioController.getUserData);

usuarioRoutes.put("/user", authenticate, UsuarioController.updateUser);

usuarioRoutes.patch("/user/change-password", authenticate, UsuarioController.changePassword);

usuarioRoutes.delete("/:id", UsuarioController.deleteUser);

// userRoutes.post("/login", UsuarioController.loginUser);
