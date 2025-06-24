import { where } from "sequelize";
import {Seccion} from "../models/seccion.js";

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

 static async EncontrarSeccionesPorModulos(req, res) {
  try {
    const { id_Modulo } = req.params;

    const seccionesPorModulo = await Seccion.findAll({
      where: { id_Modulo },
    });

    return res.status(200).json({
      message: "Secciones del módulo encontradas correctamente",
      data: seccionesPorModulo,
    });

  } catch (error) {
    console.error("Error al obtener secciones por módulo:", error);
    return res.status(500).json({
      message: "Error al obtener secciones por módulo",
      error: error.message,
    });
  }
}
}
