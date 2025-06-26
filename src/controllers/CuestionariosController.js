import {Nivel} from "../models/Nivel.js";
import {Pregunta} from "../models/Pregunta.js";
import {Respuesta} from "../models/Respuesta.js";
import { Usuario } from "../models/Usuario.js";
import { UsuarioProgreso } from "../models/Usuario_Progreso.js";

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


  static async responderPregunta(req, res) {
    try {
      const {
        id_usuario,
        id_nivel,
        idrespuesta,
        preguntaActual
      } = req.body;

      // Buscar datos esenciales
      const usuario = await Usuario.findByPk(id_usuario);
      const [progreso, creado] = await UsuarioProgreso.findOrCreate({
  where: { id_usuario, id_nivel }
});
      const respuesta = await Respuesta.findByPk(idrespuesta);

      if (!usuario || !progreso || !respuesta) {
        return res.status(404).json({ message: "Datos no encontrados" });
      }

      // Verificar si es correcta
      const esCorrecta = respuesta.correcta === true;
      let nivelCompletado = false;
      let experienciaGanada = 0;
      let reiniciado = false;

      if (esCorrecta) {
        progreso.aciertos += 1;
      } else {
        usuario.vidas -= 1;

        if (usuario.vidas <= 0) {
          usuario.vidas = 3;
          progreso.aciertos = 0;
          progreso.completado = false;
          experienciaGanada= 0;
          reiniciado = true;

          await usuario.save();
          await progreso.save();

          return res.status(200).json({
            correcta: false,
            vidasRestantes: usuario.vidas,
            reiniciado: true,
            nivelCompletado: false,
            message: "Te quedaste sin vidas, se reinició el cuestionario."
          });
        }
      }

      // Obtener cantidad total de preguntas en el nivel
      const preguntas = await Pregunta.findAll({ where: { id_nivel } });

      // Si esta fue la última pregunta:
      if (parseInt(preguntaActual, 10) + 1 > preguntas.length) {
        progreso.completado = true;
        experienciaGanada = progreso.aciertos * 20;
        usuario.experiencia += experienciaGanada;
        usuario.vidas = 3;
        nivelCompletado = true;
      }

      // Guardar cambios
      await usuario.save();
      await progreso.save();

      return res.status(200).json({
        correcta: esCorrecta,
        vidasRestantes: usuario.vidas,
        aciertos: progreso.aciertos,
        experiencia: usuario.experiencia,
        nivelCompletado,
        experienciaGanada,
        reiniciado
      });

    } catch (error) {
      console.error("Error al procesar respuesta:", error);
      return res.status(500).json({ message: "Error al responder", error: error.message });
    }
  }
}