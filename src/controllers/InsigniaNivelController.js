import { Insignia } from "../models/Insignia.js";
import { UsuarioProgreso } from "../models/Usuario_Progreso.js";
import { InsigniaNivel } from "../models/Insignia_Nivel.js";
import { UsuarioInsignia } from "../models/Usuario_Insignia.js";

export class InsigniasNivelController {


static async asignarInsigniaPorNivel(req, res) {
  const { idusuario, idnivel } = req.params;

  try {
    // 1. Verificar si el nivel está completado por el usuario
    const progreso = await UsuarioProgreso.findOne({
      where: {
        id_usuario: idusuario,
        id_nivel: idnivel,
      },
    });

    if (!progreso || progreso.completado !== true && progreso.completado !== 1 && progreso.completado !== 'true') {
      return res.status(403).json({
        mensaje: "El usuario no ha completado el nivel. No se puede asignar la insignia.",
        asignada: false,
      });
    }

    
    const relacion = await InsigniaNivel.findOne({
      where: { id_nivel: idnivel },
    });

    if (!relacion) {
      return res.status(404).json({ mensaje: "Este nivel no tiene insignia asignada" });
    }

    const idinsignia = relacion.id_insignia;

    // 3. Verificar si ya tiene la insignia
    const yaTiene = await UsuarioInsignia.findOne({
      where: {
        id_usuario: idusuario,
        id_insignia: idinsignia,
      },
    });

    // 4. Si NO la tiene y SI completó, asignar
    let asignada = false;
    if (!yaTiene) {
      await UsuarioInsignia.create({
        id_usuario: idusuario,
        id_insignia: idinsignia,
        fecha_logro: new Date(),
      });
      asignada = true;
    }

    // 5. Retornar la insignia completa
    const insignia = await Insignia.findByPk(idinsignia);

    return res.status(200).json({
      asignada,
      insignia,
    });

  } catch (error) {
    console.error("❌ Error al asignar insignia:", error);
    return res.status(500).json({
      mensaje: "Error del servidor",
      error: error.message,
    });
  }
}



  
}