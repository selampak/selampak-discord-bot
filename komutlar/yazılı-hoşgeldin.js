const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message ,args) => {
    if (!args[0]) return message.channel.send(` **Eksik Veya Hatalı Komut Kullanımı:** Doğru Kullanım: \`${ayarlar.prefix}yazılı-hoşgeldin ayarla #kanal /${ayarlar.prefix}yazılı-hoşgeldin kapat\``)
  
  let cfxkanal = message.mentions.channels.first()
  if(args[0] == 'ayarla') {
  db.set(`cfxdbayar${message.guild.id}`, cfxkanal.id)
  message.channel.send(`**Kanal Ayarlandı! \n Ayarlanan Kanal:** \`${cfxkanal.name}\``)
    return;
  }
  if(args[0] == 'kapat') {
  db.delete(`cfxdbayar${message.guild.id}`)
  message.channel.send(`**Hoşgeldin Kanalı Kapatıldı!**`)
    return;
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazılıhoşgeldin',],
  permLevel: 0,
};
  
exports.help = {
  name: "yazılı-hoşgeldin",
  by_codefenix: "bergy"
};