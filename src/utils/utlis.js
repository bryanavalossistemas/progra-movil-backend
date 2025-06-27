export function agregarMinutos(minutes) {
  let currentDate = new Date();

  return currentDate.setMinutes(currentDate.getMinutes() + minutes);
}

export function validarCorreo(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.toLowerCase());
}
