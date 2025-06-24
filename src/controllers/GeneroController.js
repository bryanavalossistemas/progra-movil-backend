import { Genero } from "../models/Genero.js";

export class GeneroController {
  static async obtenerTodosLosGeneros(req, res) {
    try {
      const generos = await Genero.findAll();

      return res.status(200).json({
        message: "Géneros encontrados correctamente",
        data: generos,
      });

    } catch (error) {
      console.error("Error al obtener géneros:", error);
      return res.status(500).json({
        message: "Error al obtener géneros",
        error: error.message,
      });
    }
  }
}