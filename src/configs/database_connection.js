import sequelize from "./database.js";
import colors from "colors";
import { Usuario } from "../models/Usuario.js";
import { Genero } from "../models/Genero.js";
import { Token } from "../models/Token.js";
import { Insignia } from "../models/Insignia.js";
import { Tipo } from "../models/Tipo.js";
import { UsuarioInsignia } from "../models/Usuario_Insignia.js";
import { UsuarioProgreso } from "../models/Usuario_Progreso.js";
import { Nivel } from "../models/Nivel.js";
import { Seccion } from "../models/seccion.js";
import { Modulo } from "../models/modulo.js";
import { Pregunta } from "../models/Pregunta.js";
import { Respuesta } from "../models/Respuesta.js";
import { InsigniaNivel } from "../models/Insignia_Nivel.js";


async function connectDataBase() {
  try {
    Genero.hasMany(Usuario, {
      foreignKey: "id_genero",
      as: "usuarios",
    });
    Usuario.belongsTo(Genero, {
      foreignKey: "id_genero",
      as: "genero",
    });

    // Usuario ↔ Token (uno a uno)
    Usuario.hasOne(Token, {
      foreignKey: "usuarioId",
      as: "token",
    });
    Token.belongsTo(Usuario, {
      foreignKey: "usuarioId",
      as: "usuario",
    });

    // Usuario ↔ Usuario_Progreso (uno a muchos)
    Usuario.hasMany(UsuarioProgreso, {
      foreignKey: "id_usuario",
      as: "progresos",
    });
    UsuarioProgreso.belongsTo(Usuario, {
      foreignKey: "id_usuario",
      as: "usuario",
    });

    // Nivel ↔ Usuario_Progreso (uno a muchos)
    Nivel.hasMany(UsuarioProgreso, {
      foreignKey: "id_nivel",
      as: "progresos",
    });
    UsuarioProgreso.belongsTo(Nivel, {
      foreignKey: "id_nivel",
      as: "nivel",
    });

    // Usuario ↔ Usuario_Insignia (uno a muchos)
    Usuario.hasMany(UsuarioInsignia, {
      foreignKey: "id_usuario",
      as: "insignias",
    });
    UsuarioInsignia.belongsTo(Usuario, {
      foreignKey: "id_usuario",
      as: "usuario",
    });

    // Insignia ↔ UsuarioInsignia (uno a muchos)
    Insignia.hasMany(UsuarioInsignia, {
      foreignKey: "id_insignia",
      as: "usuarios",
    });
    UsuarioInsignia.belongsTo(Insignia, {
      foreignKey: "id_insignia",
      as: "insignia",
    });

    // Insignia ↔ Tipo (muchos a uno)
    Tipo.hasMany(Insignia, {
      foreignKey: "id_tipo",
      as: "insignias",
    });
    Insignia.belongsTo(Tipo, {
      foreignKey: "id_tipo",
      as: "tipo",
    });

    // Nivel ↔ Seccion (muchos a uno)
    Seccion.hasMany(Nivel, {
      foreignKey: "id_seccion",
      as: "niveles",
    });
    Nivel.belongsTo(Seccion, {
      foreignKey: "id_seccion",
      as: "seccion",
    });

    // Seccion ↔ Modulo (muchos a uno)
    Modulo.hasMany(Seccion, {
      foreignKey: "id_Modulo",
      as: "secciones",
    });
    Seccion.belongsTo(Modulo, {
      foreignKey: "id_Modulo",
      as: "modulo",
    });

    // Nivel ↔ Pregunta (uno a muchos)
    Nivel.hasMany(Pregunta, {
      foreignKey: "id_nivel",
      as: "preguntas",
    });
    Pregunta.belongsTo(Nivel, {
      foreignKey: "id_nivel",
      as: "nivel",
    });

    // Pregunta ↔ Respuesta (uno a muchos)
    Pregunta.hasMany(Respuesta, {
      foreignKey: "id_pregunta",
      as: "respuestas",
    });
    Respuesta.belongsTo(Pregunta, {
      foreignKey: "id_pregunta",
      as: "pregunta",
    });

    Nivel.hasOne(InsigniaNivel, {
    foreignKey: "id_nivel",
    as: "insigniaAsignada",
    });
    InsigniaNivel.belongsTo(Nivel, {
    foreignKey: "id_nivel",
    as: "nivel",
    });

// Insignia ↔ NivelInsignia (uno a uno)
  Insignia.hasOne(InsigniaNivel, {
    foreignKey: "id_insignia",
    as: "nivelAsignado",
  });
  InsigniaNivel.belongsTo(Insignia, {
  foreignKey: "id_insignia",
  as: "insignia", 
  });

    await sequelize.authenticate();
    await sequelize.sync({ force: false });

    console.log(colors.blue.bold("CONEXIÓN EXITOSA A LA BASE DE DATOS"));
  } catch (error) {
    console.log(colors.red.bold("HUBO UN ERROR AL CONECTARSE A LA BASE DE DATOS"));
    console.log(error);
  }
}

export default connectDataBase;
