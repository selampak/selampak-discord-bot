const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Renk yükleniyor.').then(message => {
      var espriler = ['1 attın 🎲','2 attın 🎲','3 attın 🎲','4 attın 🎲','5 attın 🎲','6 attın 🎲'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['at-zar', 'zar-at', 'zarat'],
  permLevel: 0
};

exports.help = {
  name: 'zar-at',
  description: 'Espri yapar.',
  usage: 'zar-at'
}; 