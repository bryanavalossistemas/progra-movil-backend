import {Respuesta} from "../models/Respuesta.js";
import {Pregunta} from "../models/Pregunta.js";

export class RespuestaController {
  static async obtenerTodasLasRespuestas(req, res) {
    try {
      const respuestas = await Respuesta.findAll();

      return res.status(200).json({
        message: "Respuestas obtenidas correctamente",
        data: respuestas,
      });

    } catch (error) {
      console.error("Error al obtener respuestas:", error);
      return res.status(500).json({
        message: "Error al obtener respuestas",
        error: error.message,
      });
    }
  }

      static async EncontrarRespuestasporPregunta(req, res) {
      try {
        const { id_pregunta} = req.params;
    
        const RespuestaPorPregunta = await Respuesta.findAll({
          where: { id_pregunta },
        });
    
        return res.status(200).json({
          message: "Secciones del módulo encontradas correctamente",
          data: RespuestaPorPregunta,
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