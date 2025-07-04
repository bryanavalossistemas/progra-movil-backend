import { Router } from "express";
import { InsigniasController } from "../controllers/InsigniasController.js";

export const insigniaRoutes = Router();

// Ruta para obtener todas las insignias
insigniaRoutes.get("/", InsigniasController.obtenerInsignias);

// === Rutas para verificar insignias individuales ===

// Medallas
insigniaRoutes.get("/verificar/1/usuario/:idusuario", InsigniasController.verificarInsignia1);
insigniaRoutes.get("/verificar/2/usuario/:idusuario", InsigniasController.verificarInsignia2);
insigniaRoutes.get("/verificar/3/usuario/:idusuario", InsigniasController.verificarInsignia3);
insigniaRoutes.get("/verificar/4/usuario/:idusuario", InsigniasController.verificarInsignia4);
insigniaRoutes.get("/verificar/5/usuario/:idusuario", InsigniasController.verificarInsignia5);

// Logros
insigniaRoutes.get("/verificar/6/usuario/:idusuario", InsigniasController.verificarInsignia6);
insigniaRoutes.get("/verificar/7/usuario/:idusuario/nivel/:idnivel", InsigniasController.verificarInsignia7);
insigniaRoutes.get("/verificar/8/usuario/:idusuario/nivel/:idnivel", InsigniasController.verificarInsignia8);

insigniaRoutes.get("/usuario/:id", InsigniasController.verInsignias);
