import pkg from "../../package.json" with { type: "json" };

export function sayLog(message) {
  console.log("\x1b[36m[TRC BOT | TALK]\x1b[0m", message);
}

export function inputLog(message) {
  console.log("\x1b[30m[TRC BOT | INPUT]\x1b[0m", message);
}

export function infoLog(message) {
  console.log("\x1b[34m[TRC BOT | INFO]\x1b[0m", message);
}

export function successLog(message) {
  console.log("\x1b[32m[TRC BOT | SUCCESS]\x1b[0m", message);
}

export function errorLog(message) {
  console.log("\x1b[31m[TRC BOT | ERROR]\x1b[0m", message);
}

export function warningLog(message) {
  console.log("\x1b[33m[TRC BOT | WARNING]\x1b[0m", message);
}

export function bannerLog() {
  console.log(`\x1b[36m░▀█▀░█▀▄░█▀▀░░█▀▄░█▀█░▀█▀\x1b[0m`);
  console.log(`░░█░░█▀▄░█░░░░█▀▄░█░█░░█░`);
  console.log(`\x1b[36m░░▀░░▀░▀░▀▀▀░░▀▀░░▀▀▀░░▀░\x1b[0m`);
  console.log(`\x1b[36mVersión: \x1b[0m${pkg.version}\n`);
}
