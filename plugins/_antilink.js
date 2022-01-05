let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*Selamat tinggal @${m.sender.split`@`[0]} \n\n_die_`)
    if (isAdmin) return m.reply('*Umm... kamu admin, dan kamu tidak akan di kick*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin, mana bisa kick orang :v*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Ngirim link GC sendiri*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
