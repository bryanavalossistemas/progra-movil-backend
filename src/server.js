import express from "express";
import connectDataBase from "./configs/database_connection.js";
import cors from "cors";
import morgan from "morgan";
import { usuarioRoutes } from "./routes/usuarioRoutes.js";

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

export default app;
