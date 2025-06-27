import express from "express";
import connectDataBase from "./configs/database_connection.js";
import cors from "cors";
import morgan from "morgan";
import { usuarioRoutes } from "./routes/usuarioRoutes.js";
import { insigniaRoutes } from "./routes/insigniaRoutes.js";
import { generoRoutes } from "./routes/generoRoutes.js";
import { modulosRoutes } from "./routes/modulosRoutes.js";
import { seccionesRoutes } from "./routes/seccionesRoutes.js";
import { nivelesRoutes } from "./routes/nivelesRoutes.js";
import { cuestionarioRoutes } from "./routes/cuestionarioRoutes.js";
import { usuarioProgresoRoutes } from "./routes/usuarioprogresoRoutes.js";


// Conectarse a la base de datos
await connectDataBase();

// Configurar el servidor Express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Definir las rutas API

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/insignias", insigniaRoutes);
app.use("/api/generos", generoRoutes);
app.use("/api/modulos", modulosRoutes);
app.use("/api/secciones", seccionesRoutes);
app.use("/api/niveles", nivelesRoutes);
app.use("/api/cuestionarios", cuestionarioRoutes);
app.use('/api/progreso', usuarioProgresoRoutes);

export default app;
