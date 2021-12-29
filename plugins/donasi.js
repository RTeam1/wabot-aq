let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • three
│ • 0896-7776-3976
╰────

╭─「 Donasi • Bank Virtual 」
│ • OVO
│ • 0896-7776-3976
│ • DANA
│ • 0896-7776-3976
│ • GOPAY
│ • 0896-7776-3976
╰────

╭─「 Donasi • Website 」
│ • https://saweria.co/Rey404
│ • https://trakteer.id/Rey404
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
