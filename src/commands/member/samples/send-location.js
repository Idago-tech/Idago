import { PREFIX } from "../../../config.js";
import { delay } from "baileys";

export default {
  name: "send-location",
  description: "Ejemplo de cómo enviar una ubicación",
  commands: ["send-location"],
  usage: `${PREFIX}send-location`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendReact, sendLocation }) => {
    await sendReact("📍");

    await delay(3000);

    await sendReply("Voy a enviar la ubicación de la Plaza de la Sé - SP.");

    await delay(3000);

    await sendLocation(-23.55052, -46.633308);

    await delay(3000);

    await sendReply("Ahora enviaré de Nueva York, EUA.");

    await delay(3000);

    await sendLocation(40.712776, -74.005974);

    await delay(3000);

    await sendReply(
      "¡Usa la función `sendLocation(latitud, longitud)` para enviar una ubicación!"
    );
  },
};
