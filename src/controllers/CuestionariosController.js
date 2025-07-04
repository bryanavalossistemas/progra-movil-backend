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
    const { id_usuario, id_nivel, idrespuesta } = req.body;

    const usuario = await Usuario.findByPk(id_usuario);
    const [progreso] = await UsuarioProgreso.findOrCreate({
      where: { id_usuario, id_nivel }
    });

    const respuesta = await Respuesta.findByPk(idrespuesta, {
      include: [{ model: Pregunta, as: 'pregunta' }]
    });

    if (!usuario || !progreso || !respuesta || !respuesta.pregunta) {
      return res.status(404).json({ message: "Datos no encontrados" });
    }

    const preguntaRespondidaId = respuesta.id_pregunta;

    const preguntas = await Pregunta.findAll({
      where: { id_nivel },
      order: [['id', 'ASC']]
    });

    const idsPreguntas = preguntas.map(p => p.id);
    const esUltimaPregunta = preguntaRespondidaId === idsPreguntas[idsPreguntas.length - 1];

    const esCorrecta = respuesta.correcta === true;
    let nivelCompletado = false;
    let experienciaGanada = 0;
    let reiniciado = false;

    if (esCorrecta ) {
      progreso.aciertos += 1;
    } else {
      usuario.vidas -= 1;
      progreso.error +=1;

      if (usuario.vidas <= 0) {
        usuario.vidas = 3;
        progreso.aciertos = 0;
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

    if (esUltimaPregunta) {
      
      if (!progreso.completado) {
        usuario.vidas=3;
        progreso.completado = true;
        experienciaGanada = progreso.aciertos * 20;
        usuario.experiencia += experienciaGanada;

      
        while (usuario.experiencia >= 100) {
          usuario.experiencia -= 100;
          usuario.nivel_experiencia += 1;
        }

        nivelCompletado = true;
      }else{
        nivelCompletado = true
        usuario.vidas= 3;
      }
    }

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

static async reiniciarCuestionario(req, res) {
  try {
    const { id_usuario, id_nivel } = req.body;

    const usuario = await Usuario.findByPk(id_usuario);
    const progreso = await UsuarioProgreso.findOne({
      where: { id_usuario, id_nivel }
    });

    if (!usuario || !progreso) {
      return res.status(404).json({ message: "Usuario o progreso no encontrados" });
    }

    // Reiniciar datos
    usuario.vidas = 3;
    await usuario.save();

    progreso.aciertos = 0;
    progreso.error = 0;

    await progreso.save();

    return res.status(200).json({
      message: "Progreso reiniciado correctamente",
      vidas: usuario.vidas,
      aciertos: progreso.aciertos
    });

  } catch (error) {
    console.error("Error al reiniciar cuestionario:", error);
    return res.status(500).json({
      message: "Error al reiniciar cuestionario",
      error: error.message
    });
  }
}

}