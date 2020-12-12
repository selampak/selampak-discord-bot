const Discord = require('discord.js');
const db = require('quick.db')
const a = require('../ayarlar.json')

exports.run = async (bot, message,args) => {
  
let logk = message.mentions.channels.first();
let logkanal = db.fetch(`val${message.guild.id}`)
  const cfx = new Discord.RichEmbed()
  .setTitle(`**\`Güvenlik Bilgi;\`**`)
    .setDescription(`** ** \n**Ayarlamak İçin:** \`${a.prefix}güvenlik #kanal\`\n\n **Kapatmak İçin:** \`${a.prefix}güvenlik kapat\``)
      .setColor("#00ff88")
      .setFooter(`Selampak | Güvenlik Sistemi`, bot.user.avatarURL)
        const cfx2 = new Discord.RichEmbed()
        .setDescription(`Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`${a.prefix}güvenlik #kanal\``)
          .setColor("#00ff88")
          .setFooter(`Selampak | Güvenlik Sistemi`, bot.user.avatarURL)
          const cfx3 = new Discord.RichEmbed()
          .setDescription(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`)
          .setColor("#00ff88")
          .setFooter(`Selampak | Güvenlik Sistemi`, bot.user.avatarURL)
        const cfx4 = new Discord.RichEmbed()
      .setDescription(`Güvenlik başarıyla kapatıldı.`,)
    .setColor("#00ff88")
   .setFooter(`Selampak | Güvenlik Sistemi`, bot.user.avatarURL)
   const cfx5 = new Discord.RichEmbed()
  .setDescription(`Güvenlik başarıyla ${logk} olarak ayarlandı.`)
  .setColor("#00ff88")
  .setFooter(`Selampak | Güvenlik Sistemi`, bot.user.avatarURL)

   
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(cfx3);



  if (args[0] === "sıfırla" || args[0] === "kapat") {
  if(!logkanal) return message.channel.send(cfx2);
    
   db.delete(`val${message.guild.id}`)
   message.channel.send(cfx4);
  
    return
  }
  
  
 
if (!logk) return message.channel.send(cfx);
 

   db.set(`val${message.guild.id}`, logk.id)

message.channel.send(cfx5);

}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik-2',
  description: 'Selampak KOD PAYLASIM',
  usage: 'güvenlik'
};