import Modulo from "../models/Modulo.js";

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
}