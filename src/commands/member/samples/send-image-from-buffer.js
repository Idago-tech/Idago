import { PREFIX, ASSETS_DIR } from "../../../config.js";
import { delay } from "baileys";
import path from "node:path";
import fs from "node:fs";
import { getBuffer } from "../../../utils/index.js";

export default {
  name: "send-image-from-buffer",
  description: "Ejemplo de cómo enviar una imagen desde un buffer",
  commands: ["send-image-from-buffer"],
  usage: `${PREFIX}send-image-from-buffer`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendImageFromBuffer, sendReact, userJid }) => {
    await sendReact("🖼️");

    await delay(3000);

    await sendReply("Voy a enviar una imagen desde un buffer de archivo local");

    await delay(3000);

    const imageBuffer = fs.readFileSync(
      path.join(ASSETS_DIR, "samples", "sample-image.jpg")
    );

    await sendImageFromBuffer(
      imageBuffer,
      "Esta es una imagen de un buffer de archivo local"
    );

    await delay(3000);

    await sendReply("Ahora voy a enviar una imagen desde un buffer de URL");

    await delay(3000);

    const urlBuffer = await getBuffer(
      "https://api.spiderx.com.br/storage/samples/sample-image.jpg"
    );

    await sendImageFromBuffer(
      urlBuffer,
      "Esta es una imagen de un buffer de URL"
    );

    await delay(3000);

    await sendReply("También puedes enviar imágenes de buffer sin leyenda");

    await delay(3000);

    await sendImageFromBuffer(urlBuffer);

    await delay(3000);

    await sendReply("Ahora voy a enviar una imagen de buffer mencionándote:");

    await delay(3000);

    await sendImageFromBuffer(
      urlBuffer,
      `¡Aquí tienes la imagen @${userJid.split("@")[0]}!`,
      [userJid]
    );

    await delay(3000);

    await sendReply(
      "Para enviar imágenes desde buffer, usa la función sendImageFromBuffer(buffer, caption, [mentions], quoted).\n\n" +
        "Esto es útil cuando tienes imágenes procesadas en memoria o necesitas manipular la imagen antes de enviar."
    );
  },
};
