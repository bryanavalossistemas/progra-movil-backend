import { Modulo } from "../models/modulo.js";
import { Nivel } from "../models/Nivel.js"; // Assuming Usuario is not needed for this specific method
import { Seccion } from "../models/seccion.js";

export class ModulosController {
  static async EncontrarModulos(req, res) {
    try {
      const modulos = await Modulo.findAll();

      return res.status(200).json({
        message: "Módulos encontrados correctamente",
        data: modulos,
      });

    } catch (error) {
      console.error("Error al obtener módulos:", error);
      return res.status(500).json({
        message: "Error al obtener módulos",
        error: error.message,
      });
    }
  }


    static async obtenerEstructuraCompleta(req, res) {
    try {
      const { id_Modulo } = req.params;
      const resultado = [];

      // 1. Obtener secciones del módulo directamente con el modelo
      const secciones = await Seccion.findAll({
        where: { id_Modulo }
      });

      for (const seccion of secciones) {
        resultado.push({
          type: "section",
          title: seccion.nombre,
          id: seccion.id
        });

        // 2. Obtener niveles de la sección directamente
        const niveles = await Nivel.findAll({
          where: { id_seccion: seccion.id }
        });

        for (const nivel of niveles) {
          resultado.push({
            type: "nivel",
            data: nivel,
          });
        }
      }

      return res.status(200).json({
        message: "Estructura obtenida correctamente",
        data: resultado,
      });

    } catch (error) {
      console.error("Error al construir estructura:", error);
      return res.status(500).json({
        message: "Error al construir estructura",
        error: error.message,
      });
    }
  }


}