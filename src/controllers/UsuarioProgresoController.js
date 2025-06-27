import {UsuarioProgreso} from "../models/Usuario_Progreso.js";


export class UsuarioProgresoController {
    static async obtenerProgresoPorUsuarioYNivel(req, res) {
    try {
      const { id_usuario, id_nivel } = req.body;

      const progreso = await UsuarioProgreso.findOne({
        where: { id_usuario, id_nivel }
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
      const { id_usuario, id_nivel } = req.params;

      const [progreso, creado] = await UsuarioProgreso.findOrCreate({
        where: { id_usuario, id_nivel },
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

  
 
  
}

