import { where } from "sequelize";
import Seccion from "../models/Seccion.js";
import { ModulosController } from "./ModulosController.js";

export class SeccionesController {
  static async EncontrarSecciones(req, res) {
    try {
      const secciones = await Seccion.findAll();

      return res.status(200).json({
        message: "Secciones encontradas correctamente",
        data: secciones,
      });

    } catch (error) {
      console.error("Error al obtener secciones:", error);
      return res.status(500).json({
        message: "Error al obtener secciones",
        error: error.message,
      });
    }
  }

  static async EncontrarSeccionesPorModulos (req, res){
    const {idModulo} = req.params;
    const seccionesporModulo= await Seccion.findAll(where{idModulo})
    

  }
}
