const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require("../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/catch");
const speed = require("performance-now");
const _𝔏𝔞𝔟_ = require(`../../𝓜𝖎𝖟𝖚ӄ𝖎🧀𝓒𝓻𝓪𝓽𝓮/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, "g");
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const 爪𝖎𝖟𝖚ӄ𝖎git = require("simple-git")();
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
// 🛸爪𝖎𝖟𝖚ӄ𝖎™ ᴀᴅᴠᴀɴᴄᴇᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀʙᴏᴛ ᴡɪᴛʜ 80+ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴏᴛʜ ᴘʀɪᴠᴀᴛᴇ ᴀɴᴅ ɢʀᴏᴜᴘ-ᴜꜱᴀɢᴇ🛸
// ⬡==================⬡-----------------⦿𝐌𝐞𝐞𝟔™⦿-----------------⬡==================⬡
module.exports = {
  name: `animeside`,
  description: `ᴄʜᴇᴄᴋ 爪𝖎𝖟𝖚ӄ𝖎 ʀᴇꜱᴘᴏɴꜱᴇ ᴛɪᴍᴇ`,
  async handle(𝓚𝓻𝓪𝓴𝓲𝓷𝔃, chat, 爪𝖎𝖟𝖚ӄ𝖎, arg) {
    await 𝓚𝓻𝓪𝓴𝓲𝓷𝔃
      .sendMessage(
        爪𝖎𝖟𝖚ӄ𝖎.chatId,
        {
          url: _𝔏𝔞𝔟_.MEE,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          contextInfo: {
            mentionedJid: [爪𝖎𝖟𝖚ӄ𝖎.sender],
          },
          caption: `⬡ *爪𝖎𝖟𝖚ӄ𝖎* by ₭𝔯𝔞ӄ𝔦𝔫𝔷𝔏𝔞𝔟 ⬡

*Hey •@${personsending}*,
*⬡••••••⦿  𝘼𝙣𝙞𝙢𝙚  ⦿••••••⬡*

• *${ᴋᴇɪ}anime*  ꜱᴇᴀʀᴄʜ ᴀɴɪᴍᴇ
• *${ᴋᴇɪ}animewallpaper*  ᴅᴏᴡɴʟᴏᴀᴅ ʜᴅ ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀꜱ
• *${ᴋᴇɪ}cuddle*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴜᴅᴅʟᴇ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}hug*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴜɢ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}pat*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴀᴛ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}slap*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱʟᴀᴘ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}wink*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴡɪɴᴋ ꜱᴛɪᴄᴋᴇʀ
• *${ᴋᴇɪ}yes*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʏᴇꜱ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}bite*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙɪᴛᴇ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}blush*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙʟᴜꜱʜ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}bored*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʙᴏʀᴇᴅ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}confused*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄᴏɴꜰᴜꜱᴇᴅ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}cry*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴄʀʏ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}goodnight*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ɢᴏᴏᴅɴɪɢʜᴛ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}happy*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜᴀᴘᴘʏ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}hi5*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ʜɪɢʜꜰɪᴠᴇ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}poke*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴘᴏᴋᴇ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}sad*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ꜱᴀᴅ ɪᴍᴀɢᴇ
• *${ᴋᴇɪ}thinking*  ɢᴇᴛ ᴀɴ ᴀɴɪᴍᴇ-ᴛʜɪɴᴋɪɴɢ ɪᴍᴀɢᴇ
*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
        }
      )
      .catch((error) => ℓιєηт.catch(error, 𝓚𝓻𝓪𝓴𝓲𝓷𝔃, 爪𝖎𝖟𝖚ӄ𝖎));
  },
};
