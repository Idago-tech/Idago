import { PREFIX } from "../../../config.js";
import { delay } from "baileys";

export default {
  name: "send-document-from-url",
  description: "Ejemplo de cómo enviar documentos desde URLs",
  commands: ["send-document-from-url"],
  usage: `${PREFIX}send-document-from-url`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({ sendReply, sendDocumentFromURL, sendReact }) => {
    await sendReact("📄");

    await delay(3000);

    await sendReply("Voy a enviar diferentes tipos de documentos desde URLs");

    await delay(3000);

    await sendDocumentFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-document.pdf",
      "application/pdf",
      "documento-pdf-desde-la-url.pdf"
    );

    await delay(3000);

    await sendDocumentFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-text.txt",
      "text/plain",
      "archivo-texto-desde-la-url.txt"
    );

    await delay(3000);

    await sendDocumentFromURL(
      "https://raw.githubusercontent.com/guiireal/takeshi-bot-espanol/refs/heads/main/README.md",
      "text/markdown",
      "readme-ejemplo.md"
    );

    await delay(3000);

    await sendReply(
      "También puedes enviar documentos con mimetype predeterminado:"
    );

    await delay(3000);

    await sendDocumentFromURL(
      "https://api.spiderx.com.br/storage/samples/sample-document.pdf"
    );

    await delay(3000);

    await sendReply(
      "Para enviar documentos desde una URL, usa la función sendDocumentFromURL(url, mimetype, fileName).\n\n" +
        "Esto es útil cuando tienes documentos alojados en línea u obtenidos de APIs."
    );

    await delay(3000);

    await sendReply(
      "💡 *Consejo:* Asegúrate de que la URL apunta a un archivo válido y accesible."
    );
  },
};
