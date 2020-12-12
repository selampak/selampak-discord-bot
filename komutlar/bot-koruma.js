const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
  
var prefix = ayarlar.prefix;
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:x: Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  let mesaj = args.slice(0).join(' ')
  let botkoruma = await db.fetch(`botkoruma_${message.guild.id}`)

  if (!mesaj) return message.channel.send(`Aç yada kapat yazmalısın!! Örnek: ${ayarlar.prefix}bot-koruma aç`)

  if(mesaj === "kapat") {
    if(botkoruma === undefined) {
      message.channel.send(`:x: Bu sunucuda bot koruma ayarlanmamış.`)
      return
    } 
    db.delete(`botkoruma_${message.guild.id}`)
    message.channel.send(` Bot koruma başarıyla kapatıldı.`)
    return
  }
  
  
  if(mesaj === "aç") {

  
  message.channel.send(`Artık Sunucunuz Botlardan Korunuyor.`)
  db.set(`botkoruma_${message.guild.id}`,"açık")

  }
  };
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['bot-koruma'],
  kategori: "sunucu",
    permLevel: 3
};
exports.help = {
    name: 'bot-koruma',
    description: 'Sunucuya giren botları otomatik olarak banlar.',
    usage: 'bot-koruma aç'
};