import { PREFIX, ASSETS_DIR } from "../../../config.js";
import { delay } from "baileys";
import path from "node:path";

export default {
  name: "send-image-from-file",
  description: "Ejemplo de cómo enviar una imagen desde un archivo local",
  commands: ["send-image-from-file"],
  usage: `${PREFIX}send-image-from-file`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendImageFromFile, sendReact, userJid }) => {
    await sendReact("🖼️");

    await delay(3000);

    await sendReply("Voy a enviar una imagen desde un archivo local");

    await delay(3000);

    await sendImageFromFile(
      path.join(ASSETS_DIR, "samples", "sample-image.jpg"),
      "Esta es una leyenda opcional para la imagen"
    );

    await delay(3000);

    await sendReply("También puedes enviar imágenes sin leyenda:");

    await delay(3000);

    await sendImageFromFile(
      path.join(ASSETS_DIR, "samples", "sample-image.jpg")
    );

    await delay(3000);

    await sendReply("O usar otras imágenes del proyecto:");

    await delay(3000);

    await sendImageFromFile(
      path.join(ASSETS_DIR, "images", "takeshi-bot.png"),
      "¡Logo de Takeshi Bot!"
    );

    await delay(3000);

    await sendReply(
      "Ahora voy a enviar una imagen desde archivo mencionándote:"
    );

    await delay(3000);

    await sendImageFromFile(
      path.join(ASSETS_DIR, "images", "takeshi-bot.png"),
      `¡Logo de Takeshi Bot para ti @${userJid.split("@")[0]}!`,
      [userJid]
    );

    await delay(3000);

    await sendReply(
      "Para enviar imágenes desde archivo, usa la función sendImageFromFile(filePath, caption, [mentions], quoted).\n\n" +
        "Esto es útil cuando tienes imágenes almacenadas localmente en el servidor."
    );
  },
};
