import { PREFIX } from "../../config.js";

export default {
  name: "hide-tag",
  description: "Menciona a todos",
  commands: ["hide-tag", "to-tag"],
  usage: `${PREFIX}hidetag motivo`,
  adminOnly: true,
  handle: async ({ fullArgs, sendText, socket, remoteJid, sendReact, webMessage }) => {
    const { participants } = await socket.groupMetadata(remoteJid);
    const mentions = participants.map(({ id }) => id);

    let textToSend = fullArgs;
    
    // Busca si hay un mensaje al que se está respondiendo usando webMessage
    const quotedMessage = webMessage?.message?.extendedTextMessage?.contextInfo?.quotedMessage;

    if (quotedMessage) {
        textToSend = quotedMessage.conversation || quotedMessage.extendedTextMessage?.text || fullArgs;
    }

    await sendReact("🗣️");
    await sendText(textToSend, mentions);
  },
};
