import { PREFIX, ASSETS_DIR } from "../../../config.js";
import { delay } from "baileys";
import path from "node:path";

export default {
  name: "send-audio-from-file",
  description: "Ejemplo de cómo enviar un audio a través de un archivo",
  commands: ["send-audio-from-file"],
  usage: `${PREFIX}send-audio-from-file`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendAudioFromFile, sendReact }) => {
    await sendReact("🔈");

    await delay(3000);

    await sendReply(
      "Voy a enviar un audio desde un archivo, lo enviaré como reproducción de archivo."
    );

    await delay(3000);

    await sendAudioFromFile(
      path.join(ASSETS_DIR, "samples", "sample-audio.mp3")
    );

    await delay(3000);

    await sendReply(
      "Ahora enviaré un audio desde un archivo, pero como si yo hubiera grabado el audio."
    );

    await delay(3000);

    await sendAudioFromFile(
      path.join(ASSETS_DIR, "samples", "sample-audio.mp3"),
      true
    );

    await delay(3000);

    await sendReply(
      "Ahora enviaré un audio desde un archivo, pero sin mencionar encima de tu mensaje."
    );

    await delay(3000);

    await sendAudioFromFile(
      path.join(ASSETS_DIR, "samples", "sample-audio.mp3"),
      false,
      false
    );

    await delay(3000);

    await sendReply(
      "Y finalmente, enviaré un audio desde un archivo, como si yo lo hubiera grabado, pero sin mencionar encima de tu mensaje."
    );

    await delay(3000);

    await sendAudioFromFile(
      path.join(ASSETS_DIR, "samples", "sample-audio.mp3"),
      true,
      false
    );
  },
};
