import { Nivel } from "../models/Nivel"; // Assuming Usuario is not needed for this specific method
import { Seccion } from "../models/Seccion";
import { Modulos} from "../models/Modulo";


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


  static async FiltrarNiveles (req, res){



  }
}