import { Insignia } from "../models/Insignia.js";
import { UsuarioProgreso } from "../models/Usuario_Progreso.js";
import { UsuarioInsignia } from "../models/Usuario_Insignia.js";

export class InsigniasController {
  static async obtenerInsignias(req, res) {
    try {
      const insignias = await Insignia.findAll();
      return res.status(200).json(insignias);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al obtener insignias", error });
    }
  }

  // Verificador generico por ID y función
  static async verificarInsignia(idusuario, idinsignia, condicionFn, res) {
  try {
    const tiene = await UsuarioInsignia.findOne({ where: { id_usuario: idusuario, id_insignia: idinsignia } });
    const cumplioCondicion = await condicionFn();
    const insignia = await Insignia.findByPk(idinsignia);

    // Si cumple la condición y no la tiene, asignársela
    if (cumplioCondicion && !tiene) {
      await UsuarioInsignia.create({
        id_usuario: idusuario,
        id_insignia: idinsignia,
        fecha_logro: new Date()
      });
    }

    return res.status(200).json({
      tiene: !!tiene || cumplioCondicion,
      cumplioCondicion,
      insignia,
    });
  } catch (error) {
    return res.status(500).json({ mensaje: "Error al verificar insignia", error: error.message });
  }
}


  static verificarInsignia1 = async (req, res) => {
    const { idusuario } = req.params;
    const niveles = [1, 2, 3, 4, 5];
    await InsigniasController.verificarInsignia(idusuario, 1, async () => {
      const completados = await UsuarioProgreso.count({
        where: { id_usuario: idusuario, id_nivel: niveles, completado: true }
      });
      return completados === niveles.length;
    }, res);
  }

  static verificarInsignia2 = async (req, res) => {
    const { idusuario } = req.params;
    const niveles = [6, 7, 8, 9, 10];
    await InsigniasController.verificarInsignia(idusuario, 2, async () => {
      const completados = await UsuarioProgreso.count({
        where: { id_usuario: idusuario, id_nivel: niveles, completado: true }
      });
      return completados === niveles.length;
    }, res);
  }

  static verificarInsignia3 = async (req, res) => {
    const { idusuario } = req.params;
    const niveles = [11, 12, 13, 14, 15];
    await InsigniasController.verificarInsignia(idusuario, 3, async () => {
      const completados = await UsuarioProgreso.count({
        where: { id_usuario: idusuario, id_nivel: niveles, completado: true }
      });
      return completados === niveles.length;
    }, res);
  }

  static verificarInsignia4 = async (req, res) => {
    const { idusuario } = req.params;
    const niveles = [16, 17, 18, 19, 20];
    await InsigniasController.verificarInsignia(idusuario, 4, async () => {
      const completados = await UsuarioProgreso.count({
        where: { id_usuario: idusuario, id_nivel: niveles, completado: true }
      });
      return completados === niveles.length;
    }, res);
  }

  static verificarInsignia5 = async (req, res) => {
    const { idusuario } = req.params;
    const niveles = [26, 27, 28, 29, 30];
    await InsigniasController.verificarInsignia(idusuario, 5, async () => {
      const completados = await UsuarioProgreso.count({
        where: { id_usuario: idusuario, id_nivel: niveles, completado: true }
      });
      return completados === niveles.length;
    }, res);
  }

  static verificarInsignia6 = async (req, res) => {
    const { idusuario } = req.params;
    await InsigniasController.verificarInsignia(idusuario, 6, async () => {
      const progreso = await UsuarioProgreso.findOne({ where: { id_usuario: idusuario, id_nivel: 1 } });
      return progreso?.completado === true;
    }, res);
  }

  static verificarInsignia7 = async (req, res) => {
    const { idusuario, idnivel } = req.params;
    await InsigniasController.verificarInsignia(idusuario, 7, async () => {
      const progreso = await UsuarioProgreso.findOne({ where: { id_usuario: idusuario, id_nivel: idnivel } });
      return progreso?.completado === true && progreso.errores === 0;
    }, res);
  }

  static verificarInsignia8 = async (req, res) => {
    const { idusuario, idnivel } = req.params;
    await InsigniasController.verificarInsignia(idusuario, 8, async () => {
      const progreso = await UsuarioProgreso.findOne({ where: { id_usuario: idusuario, id_nivel: idnivel } });
      return progreso?.completado === true && progreso.intentos >= 3;
    }, res);
  }


   static async verInsignias(req, res) {
  try {
    const { idusuario } = req.params;

    const insignias = await UsuarioInsignia.findAll({
      where: { id_usuario: idusuario },
      include: {
        model: Insignia,
        as: 'Insignia', // <-- Aquí agregas el alias
        attributes: ['id', 'nombre', 'descripcion']
      }
    });

    if (insignias.length === 0) {
      return res.status(200).json({ mensaje: 'El usuario no tiene insignias' });
    }

    const resultado = insignias.map(i => i.Insignia);

    return res.status(200).json(resultado);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error del servidor' });
  }
}
static async verInsignias(req, res) {
  try {
    const insignias = await UsuarioInsignia.findAll({
      where: { id_usuario: req.params.id },
      include: [
        {
          model: Insignia,
          as: "insignia", // Usa el alias definido en la asociación
        },
      ],
    });

    res.status(200).json(insignias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener insignias", error });
  }
}


  
}