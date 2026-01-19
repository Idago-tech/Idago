import { PREFIX } from "../../../config.js";
import { delay } from "baileys";

export default {
  name: "send-audio-from-url",
  description: "Ejemplo de cómo enviar un audio a través de un enlace/url",
  commands: ["send-audio-from-url"],
  usage: `${PREFIX}send-audio-from-url`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendAudioFromURL, sendReact }) => {
    await sendReact("🔈");

    await delay(3000);

    await sendReply(
      "Voy a enviar un audio desde un enlace, lo enviaré como reproducción de archivo."
    );

    await delay(3000);

    await sendAudioFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-audio.mp3"
    );

    await delay(3000);

    await sendReply(
      "Ahora enviaré un audio desde un enlace, pero como si yo hubiera grabado el audio."
    );

    await delay(3000);

    await sendAudioFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-audio.mp3",
      true
    );

    await delay(3000);

    await sendReply(
      "Ahora enviaré un audio desde un enlace, pero sin mencionar encima de tu mensaje."
    );

    await delay(3000);

    await sendAudioFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-audio.mp3",
      false,
      false
    );

    await delay(3000);

    await sendReply(
      "Y finalmente, enviaré un audio desde un enlace, como si yo lo hubiera grabado, pero sin mencionar encima de tu mensaje."
    );

    await delay(3000);

    await sendAudioFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-audio.mp3",
      true,
      false
    );
  },
};
