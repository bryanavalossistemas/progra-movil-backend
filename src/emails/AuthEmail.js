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

  static async sendPasswordResetToken(user) {
    try {
      await transporter.sendMail({
        from: "Corporación Loa y pardo <admin@corporacionloaypardo.com>",
        to: user.correo,
        subject: "Corporación Loa y pardo - Reestablece tu password",
        text: "Corporación Loa y pardo - Reestablece tu password",
        html: `<p>Hola: ${user.name}, has solicitado reestablecer tu password.</p>
            <p>Visita el siguiente enlace:</p>
            <a href="https://ulima-shop-frontend.vercel.app/auth/new-password">Reestablecer Password</a>
            <p>E ingresa el código: <b>${user.token}</b></p>
            <p>Este token expira en 10 minutos</p>
        `,
      });
    } catch (error) {
      console.log(error);
      throw Error;
    }
  }
}
