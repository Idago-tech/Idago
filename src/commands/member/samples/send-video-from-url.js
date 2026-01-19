import { PREFIX } from "../../../config.js";
import { delay } from "baileys";

export default {
  name: "send-video-from-url",
  description: "Ejemplo de cómo enviar un video desde una URL",
  commands: ["send-video-from-url"],
  usage: `${PREFIX}send-video-from-url`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendVideoFromURL, sendReact, userJid }) => {
    await sendReact("🎥");

    await delay(3000);

    await sendReply("Voy a enviar un video desde una URL");

    await delay(3000);

    await sendVideoFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-video.mp4"
    );

    await delay(3000);

    await sendReply("También enviar sin mencionar el mensaje del usuario:");

    await delay(3000);

    await sendVideoFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-video.mp4",
      null,
      false
    );

    await delay(3000);

    await sendReply("También puedes enviar videos con leyenda:");

    await delay(3000);

    await sendVideoFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-video.mp4",
      "¡Aquí está el video que pediste!"
    );

    await delay(3000);

    await sendReply("También videos con leyenda, mencionando al usuario:");

    await delay(3000);

    await sendVideoFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-video.mp4",
      `¡Aquí está el video que pediste @${userJid.split("@")[0]}!`,
      [userJid]
    );

    await delay(3000);

    await sendReply(
      "Para enviar videos desde URL, usa la función sendVideoFromURL(url, caption, [mentions], quoted).\n\n" +
        "Esto es útil cuando tienes videos alojados en línea u obtenidos de APIs."
    );

    await delay(3000);

    await sendReply(
      "💡 **Consejo:** Asegúrate de que la URL apunte a un archivo de video válido y accesible."
    );
  },
};
