var handler = async m => m.reply(`
╭─「 Donasi 」
│ • TELKOMSEL [ga ada]
│ • DANA [088804947282]
│ • OVO [ga ada]
│ • GOPAY [ga ada]
│ • SHOPPY PAY [ga ada]
│ • Saweria [ga ada]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6288804947282
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
