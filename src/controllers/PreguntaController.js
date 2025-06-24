import {Pregunta} from "../models/Pregunta.js";
import {Nivel} from "../models/Nivel.js";

export class PreguntaController {
  static async obtenerTodasLasPreguntas(req, res) {
    try {
      const preguntas = await Pregunta.findAll();

      return res.status(200).json({
        message: "Preguntas obtenidas correctamente",
        data: preguntas,
      });

    } catch (error) {
      console.error("Error al obtener preguntas:", error);
      return res.status(500).json({
        message: "Error al obtener preguntas",
        error: error.message,
      });
    }
  }

  
    static async EncontrarPreguntasporNivel(req, res) {
    try {
      const { id_nivel} = req.params;
  
      const NivelesPorSeccion = await Pregunta.findAll({
        where: { id_nivel },
      });
  
      return res.status(200).json({
        message: "Secciones del módulo encontradas correctamente",
        data: NivelesPorSeccion,
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