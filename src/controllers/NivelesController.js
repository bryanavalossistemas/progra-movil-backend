import { Nivel } from "../models/Nivel.js"; // Assuming Usuario is not needed for this specific method




export class NivelesController {

  static async EncontrarNiveles(req, res) {
    try {
      const niveles = await Nivel.findAll();

      return res.status(niveles.length ? 200 : 404).json({
        message: niveles.length 
          ? "Niveles encontrados correctamente" 
          : "No se encontraron niveles",
        data: niveles,
      });

    } catch (error) {
      console.error("Error al buscar niveles:", error);
      return res.status(500).json({ 
        message: "Error interno del servidor",
        error: error.message,
      });
    }
  }


  static async EncontrarNivelesPorSeccion(req, res) {
  try {
    const { id_seccion } = req.params;

    const NivelesPorSeccion = await Nivel.findAll({
      where: { id_seccion },
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
