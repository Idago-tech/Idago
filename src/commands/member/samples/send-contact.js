import { PREFIX } from "../../../config.js";
import { delay } from "baileys";

export default {
  name: "send-contact",
  description: "Ejemplo de cómo enviar un contacto",
  commands: ["send-contact"],
  usage: `${PREFIX}send-contact`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendReact, sendContact }) => {
    await sendReact("📲");

    await delay(3000);

    await sendReply("Voy a enviar el contacto de mi creador.");

    await delay(3000);

    await sendContact("+55 11 99612-2056", "Dev Gui");

    await delay(3000);

    await sendReply(
      "¡Usa la función `sendContact('+55 99 99999-9999', 'Nombre del contacto')` para enviar un contacto!"
    );
  },
};
