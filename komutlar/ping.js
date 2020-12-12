const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "Ping Menüsü",
              icon_url: "https://cdn.discordapp.com/avatars/546323875068379137/430bc15e96a3bc92b32818c90f1e704c.png?size=2048"
            },
                "thumbnail": {
                 "url": "https://cdn.discordapp.com/avatars/546323875068379137/430bc15e96a3bc92b32818c90f1e704c.png?size=2048"
            },
            title: "",
            description: ` <a:infinity1:679038249062236198> [Davet](https://bit.ly/36aFJOi) : **${Math.round(client.ping)}** ms \n  Pingim :joy:`,
      
            fields: [
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "",
              text: "© SelamPak"
            }
          }
        });  
        message.react("📝")
      .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)

}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p', 'pong', 'uptime',],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Tüm komutları gösterir.',
  usage: 'ping'
};