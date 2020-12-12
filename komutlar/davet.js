const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const umutbey = new Discord.RichEmbed()
    .setColor('RED')
    .setAuthor(`SelamPak`, client.user.avatarURL) 
      .setDescription('**[Website](https://selampak.glitch.me/)**')
.setThumbnail(client.user.avatarURL)
      .addField('<a:file53:700082015655165983>','Sunucunuza Selampak botu eklemek istiyorsaniz')
.addField('**  Davet Linki **', '[➾ Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=546323875068379137&scope=bot&permissions=2146958847)')
.setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
};

exports.help = {
    name: 'davet',
      category: 'bY Selçuk',
      description: 'CODE SELCUK.',
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////                         CODE  SElCUK                     //////////////////////////////
/////////////////////////////////                         By Selçuk                        //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////