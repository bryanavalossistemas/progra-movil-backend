import { Insignia } from "../models/Insignia.js";
import { UsuarioProgreso } from "../models/Usuario_Progreso.js";
import { UsuarioInsignia } from "../models/Usuario_Insignia.js";

export class InsigniasController {
  // === CRUD BÁSICO ===

  static async crearInsignia(req, res) {
    try {
      const { nombre, imagen, descripcion } = req.body;
      const nueva = await Insignia.create({ nombre, imagen, descripcion });
      return res.status(201).json(nueva);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al crear insignia", error });
    }
  }

  static async obtenerInsignias(req, res) {
    try {
      const insignias = await Insignia.findAll();
      return res.status(200).json(insignias);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al obtener insignias", error });
    }
  }

  static async obtenerInsigniaPorId(req, res) {
    try {
      const { id } = req.params;
      const insignia = await Insignia.findByPk(id);
      if (!insignia) return res.status(404).json({ mensaje: "No encontrada" });
      return res.status(200).json(insignia);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error", error });
    }
  }

  static async actualizarInsignia(req, res) {
    try {
      const { id } = req.params;
      const { nombre, imagen, descripcion } = req.body;
      const insignia = await Insignia.findByPk(id);
      if (!insignia) return res.status(404).json({ mensaje: "No encontrada" });
      insignia.nombre = nombre;
      insignia.imagen = imagen;
      insignia.descripcion = descripcion;
      await insignia.save();
      return res.status(200).json(insignia);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error", error });
    }
  }

  static async eliminarInsignia(req, res) {
    try {
      const { id } = req.params;
      const insignia = await Insignia.findByPk(id);
      if (!insignia) return res.status(404).json({ mensaje: "No encontrada" });
      await insignia.destroy();
      return res.status(200).json({ mensaje: "Eliminada" });
    } catch (error) {
      return res.status(500).json({ mensaje: "Error", error });
    }
  }

  // === EVALUAR Y OTORGAR INSIGNIAS ===

  static async evaluar(req, res) {
    try {
      const { idusuario, idnivel } = req.body;
      const progreso = await UsuarioProgreso.findOne({ where: { idusuario, idnivel } });

      if (!progreso) {
        return res.status(404).json({ message: "Progreso no encontrado" });
      }

      const otorgadas = [];

      // Insignia 1: Nivel completado sin errores
      if (progreso.completado && progreso.errores === 0) {
        const yaTiene = await UsuarioInsignia.findOne({ where: { idusuario, idinsignia: 1 } });
        if (!yaTiene) {
          await UsuarioInsignia.create({ idusuario, idinsignia: 1 });
          otorgadas.push("Nivel sin errores");
        }
      }

      // Insignia 2: Nivel completado en menos de 60 segundos
      if (progreso.completado && progreso.tiempo <= 60) {
        const yaTiene = await UsuarioInsignia.findOne({ where: { idusuario, idinsignia: 2 } });
        if (!yaTiene) {
          await UsuarioInsignia.create({ idusuario, idinsignia: 2 });
          otorgadas.push("Nivel rápido");
        }
      }

      return res.status(200).json({
        message: otorgadas.length ? "Insignias otorgadas" : "No se otorgaron nuevas insignias",
        otorgadas,
      });

    } catch (error) {
      console.error("Error al evaluar insignias:", error);
      return res.status(500).json({
        message: "Error interno al evaluar insignias",
        error: error.message,
      });
    }
  }
}
