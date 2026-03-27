import pkg from "../../package.json" with { type: "json" };

/**
 * Nueva paleta de colores de la Tricolor ESPORT (ref: image_0.png)
 * \x1b[33m (Amarillo Dorado, color del texto 'TRC BOT')
 * \x1b[32m (Verde Neón, color de los acentos del logo)
 */

export function sayLog(message) {
  // Combinación: [Prefijo en Verde] + Mensaje en Amarillo (principal)
  console.log("\x1b[32m[TRC BOT | TALK]\x1b[0m \x1b[33m%s\x1b[0m", message);
}

export function inputLog(message) {
  // Prefijo y mensaje en Verde Neón (entrada)
  console.log("\x1b[32m[TRC BOT | INPUT]\x1b[0m", message);
}

export function infoLog(message) {
  // Prefijo y mensaje en Amarillo Dorado (info)
  console.log("\x1b[33m[TRC BOT | INFO]\x1b[0m", message);
}

export function successLog(message) {
  // Prefijo y mensaje en Amarillo Dorado con un toque verde (éxito)
  console.log("\x1b[33m[TRC BOT |\x1b[0m \x1b[32mSUCCESS]\x1b[0m", message);
}

export function errorLog(message) {
  // Prefijo y mensaje en Rojo estándar, pero con un toque Amarillo para mantener el tema.
  console.log("\x1b[31m[TRC BOT | ERROR]\x1b[0m \x1b[33m%s\x1b[0m", message);
}

export function warningLog(message) {
  // Prefijo en Amarillo (tema principal) y mensaje en Amarillo estándar (advertencia).
  console.log("\x1b[33m[TRC BOT | WARNING]\x1b[0m \x1b[33m%s\x1b[0m", message);
}

export function bannerLog() {
  // Banner principal en Verde Neón para resaltar la identidad.
  console.log(`\x1b[32m░▀█▀░█▀▄░█▀▀░░█▀▄░█▀█░▀█▀\x1b[0m`);
  console.log(`\x1b[32m░░█░░█▀▄░█░░░░█▀▄░█░█░░█░\x1b[0m`);
  console.log(`\x1b[32m░░▀░░▀░▀░▀▀▀░░▀▀░░▀▀▀░░▀░\x1b[0m`);
  
  // Versión en Amarillo Dorado sobre Verde.
  console.log(`\x1b[33mVersión:\x1b[0m \x1b[32m${pkg.version}\x1b[0m\n`);
}
