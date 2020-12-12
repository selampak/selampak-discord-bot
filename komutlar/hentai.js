const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, msg, args) => {

  if (msg.channel.nsfw === true) {
 const embed = new Discord.RichEmbed()
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      const embed1 = new Discord.RichEmbed()
      .setAuthor(`hentai!`)
      .setTitle("Click to Go to Picture")
      .setImage(response.body.message)
      .setColor("RANDOM")
      .setURL(response.body.message)
      msg.channel.send(embed1);
    });
  } else {
    msg.channel.send("This channel is not an ``NSFW`` channel!")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hentai',
  description: 'hentai.',
  usage: 'hentai'
};