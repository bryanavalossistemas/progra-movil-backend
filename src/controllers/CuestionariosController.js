import {Nivel} from "../models/Nivel.js";
import {Pregunta} from "../models/Pregunta.js";
import {Respuesta} from "../models/Respuesta.js";

export class CuestionarioController {
  static async obtenerCuestionarioPorNivel(req, res) {
    try {
      const { id_nivel } = req.params;

      // 1. Verificar que el nivel exista
      const nivel = await Nivel.findByPk(id_nivel);
      if (!nivel) {
        return res.status(404).json({ message: "Nivel no encontrado" });
      }

      // 2. Traer las preguntas del nivel
      const preguntas = await Pregunta.findAll({
        where: { id_nivel: id_nivel },
      });

      // 3. Obtener todas las respuestas asociadas a esas preguntas
      const preguntaIds = preguntas.map(p => p.id);

      const respuestas = await Respuesta.findAll({
        where: { id_pregunta: preguntaIds },
      });

      // 4. Retornar respuesta separada
      return res.status(200).json({
        message: "Cuestionario obtenido correctamente",
        nivel: {
          id: nivel.id,
          numero: nivel.numero,
          descripcion: nivel.descripcion
        },
        preguntas,
        respuestas
      });

    } catch (error) {
      console.error("Error al obtener cuestionario:", error);
      return res.status(500).json({
        message: "Error al obtener cuestionario",
        error: error.message
      });
    }
  }
}