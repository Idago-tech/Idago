import { PREFIX } from "../../config.js";

export default {
  name: "mención",
  description: "Este comando menciona a todos el grupo",
  commands: ["n", "mencionar", "m", "notify", "notifi", "notificar", "notificacion"],
  usage: `${PREFIX}hidetag motivo`,
  handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact, msg }) => {
    const { participants } = await socket.groupMetadata(remoteJid);
    const mentions = participants.map(({ id }) => id);

    let textToSend = fullArgs;
    
    // Busca si hay un mensaje al que se está respondiendo
    const quotedMessage = msg?.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    if (quotedMessage) {
        textToSend = quotedMessage.conversation || quotedMessage.extendedTextMessage?.text || fullArgs;
    }

    await sendReact("🗣️");
    await sendText(textToSend, mentions);
  },
};
