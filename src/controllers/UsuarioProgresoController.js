import {UsuarioProgreso} from "../models/Usuario_Progreso.js";
import {Usuario} from "../models/Usuario.js";

export class UsuarioProgresoController {
    static async obtenerProgresoPorUsuarioYNivel(req, res) {
    try {
      const { idusuario, idnivel } = req.params;

      const progreso = await UsuarioProgreso.findOne({
        where: { idusuario, idnivel }
      });

      if (!progreso) {
        return res.status(404).json({
          message: "Progreso no encontrado para este usuario y nivel",
        });
      }

      return res.status(200).json({
        message: "Progreso encontrado",
        data: progreso,
      });

    } catch (error) {
      console.error("Error al buscar progreso:", error);
      return res.status(500).json({
        message: "Error al buscar progreso",
        error: error.message,
      });
    }
  }

  // Crear progreso si no existe
  static async crearProgreso(req, res) {
    try {
      const { idusuario, idnivel } = req.body;

      const [progreso, creado] = await UsuarioProgreso.findOrCreate({
        where: { idusuario, idnivel },
        defaults: {
          completado: false,
          intentos: 0,
          aciertos: 0,
          errores: 0,
          tiempo: 0
        }
      });

      return res.status(creado ? 201 : 200).json({
        message: creado
          ? "Progreso creado correctamente"
          : "El progreso ya existe",
        data: progreso,
      });

    } catch (error) {
      console.error("Error al crear progreso:", error);
      return res.status(500).json({
        message: "Error al crear progreso",
        error: error.message,
      });
    }
  }

  
  static async finalizarCuestionario(req, res) {
    try {
      const {
        idusuario,
        idnivel,
        aciertos,
        errores,
        vidasRestantes,
        experienciaGanada,
        tiempo,

      } = req.body;

      // 1. Localizar (o crear) el registro de progreso
      const [progreso] = await UsuarioProgreso.findOne({
        where: { idusuario, idnivel },
        defaults: { aciertos: 0, completado: false }
      });

      // 2. Regla de negocio: solo se marca completado si queda al menos 1 vida
      const aprobado = vidasRestantes > 0;

      progreso.aciertos = aciertos;
      progreso.errores = errores;
      progreso.tiempo = tiempo;
      progreso.completado = aprobado;
      await progreso.save();

      // 3. Sumar experiencia al usuario si aprobó
      if (aprobado) {
  const usuario = await Usuario.findByPk(idusuario);
  if (usuario) {
    usuario.experiencia += experienciaGanada; 

    // Subir nivel mientras tenga 100 o más de experiencia
    while (usuario.experiencia >= 100) {
      usuario.experiencia -= 100;
      usuario.nivel_experiencia += 1;
    }

    await usuario.save();
  }
}

      return res.status(200).json({
        message: "Progreso actualizado",
        data: progreso,
        aprobado,
      });

    } catch (error) {
      console.error("Error al finalizar cuestionario:", error);
      return res.status(500).json({
        message: "Error al finalizar cuestionario",
        error: error.message,
      });
    }
  }
}