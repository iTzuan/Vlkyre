`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `admins`,
  description: `Tag admins of a group (either as a reply to another message or a direct tag).`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}admins`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      `🐙============================================================================================================================<⚡>`;
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀᴄᴏɴꜰ = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `*${ᴋᴇɪ}admins*  command is only applicable for group chats.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        return;
      }

      var message = ``;
      for (let admin of 𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins) {
        let number = admin.split(`@`)[0];
        message += `@${number} `;
      }

      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        ӄʀǟӄɨռʐ
          .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, message, MessageType.text, {
            quoted: chat,
            contextInfo: {
              mentionedJid: 𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins,
            },
          })
          .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
        return;
      }

      ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, message, MessageType.text, {
          quoted: chat,
          contextInfo: {
            stanzaId: 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessageId,
            participant: 𝓜𝖎𝖟𝖚ӄ𝖎.replyParticipant,
            quotedMessage: {
              conversation: 𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage,
            },
            mentionedJid: 𝓜𝖎𝖟𝖚ӄ𝖎.groupAdmins,
          },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
