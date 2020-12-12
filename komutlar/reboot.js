const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send(`${client.user.username} yeniden başlatılıyor! ⌛`).then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(1); 
    });

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot', 
  description: 'Botu yeniden başlatır',
  usage: 'reboot'
};
 