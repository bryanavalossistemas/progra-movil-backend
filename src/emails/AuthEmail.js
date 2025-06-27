import { transporter } from "../configs/nodemailer.js";

export class AuthEmail {
  static async enviarTokenDeConfirmacion(usuario) {
    try {
      await transporter.sendMail({
        from: "Math App <admin@mathapp.com>",
        to: usuario.correo,
        subject: "Math App - Confirma tu cuenta",
        text: "Math App - Confirma tu cuenta",
        html: `<p>Hola: ${usuario.usuario}, has creado tu cuenta en Math App, ya casi esta todo listo, solo debes confirmar tu cuenta</p>
                  <p>Visita el siguiente enlace:</p>
                  <a href="https://ulima-shop-frontend.vercel.app/auth/confirm">Confirmar cuenta</a>
                  <p>E ingresa el código: <b>${usuario.token}</b></p>
                  <p>Este token expira en 10 minutos</p>
              `,
      });
    } catch (error) {
      console.log(error);
      throw Error;
    }
  }

  static async enviarTokenDeRecuperacion(usuario) {
    try {
      await transporter.sendMail({
        from: "Math App <admin@mathapp.com>",
        to: usuario.correo,
        subject: "Math App - Token de recuperación",
        text: "Corporación Loa y pardo - Reestablece tu password",
        html: `<p>Hola: ${usuario.usuario}, has solicitado reestablecer tu password.</p>
            <p>E ingresa el código: <b>${usuario.token}</b></p>
            <p>Este token expira en 10 minutos</p>
        `,
      });
    } catch (error) {
      console.log(error);
      throw Error;
    }
  }
}
