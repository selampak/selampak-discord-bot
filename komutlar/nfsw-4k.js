const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Bu kanal bir NSFW kanalı değil!")
  }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['nsfw-4k','4knsfw'],
   permLevel: 0
 };

 exports.help = {
   name: '4k',
   description: '+18 Resim Gösterir',
   usage: '4k'
 };