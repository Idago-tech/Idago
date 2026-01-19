import { PREFIX, ASSETS_DIR } from "../../../config.js";
import { delay } from "baileys";
import path from "node:path";

export default {
  name: "send-video-from-file",
  description: "Ejemplo de cómo enviar un video desde un archivo local",
  commands: ["send-video-from-file"],
  usage: `${PREFIX}send-video-from-file`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendVideoFromFile, sendReact }) => {
    await sendReact("🎥");

    await delay(3000);

    await sendReply("Voy a enviar un video desde un archivo local");

    await delay(3000);

    await sendVideoFromFile(
      path.join(ASSETS_DIR, "samples", "sample-video.mp4"),
      "Este es un video de ejemplo con leyenda"
    );

    await delay(3000);

    await sendReply("También puedes enviar videos sin leyenda:");

    await delay(3000);

    await sendVideoFromFile(
      path.join(ASSETS_DIR, "samples", "sample-video.mp4")
    );

    await delay(3000);

    await sendReply(
      "Para enviar videos desde archivo, usa la función sendVideoFromFile(filePath, caption, [mentions], quoted).\n\n" +
        "Esto es útil cuando tienes videos almacenados localmente en el servidor."
    );

    await delay(3000);

    await sendReply(
      "💡 **Consejo:** Los formatos compatibles incluyen MP4, AVI, MOV, etc. WhatsApp los convierte automáticamente si es necesario."
    );
  },
};
