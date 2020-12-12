const Discord = require('discord.js')
const googleTTS = require('google-tts-api');
const ayarlar = require('../ayarlar.json');
const opus = require("node-opus")


exports.run = async (client, message, args) => {
    let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix

  let yazi = args.join(" ")
  
  if (!message.member.voiceChannel) return message.channel.send(' Lütfen sesli bir kanala katıl ve tekrar dene.');
  if (!yazi) return message.channel.send(' Sesli olarak söylenmesini istediğin mesajı belirtmelisin. *seslimesaj Merhaba')
  
  googleTTS(`${yazi}`, 'tr', 1).then(url => {
    message.member.voiceChannel.join().then(connection => {
      message.channel.send(` \`${yazi}\` mesajı sesli olarak söyleniyor.`)
      connection.playStream(url).on("end",() => {
        connection.disconnect();
      })
    })
  })
  
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['konuş','söylet'],
   kategori: "eğlence",
   permLevel: 0
 };

 exports.help = {
   name: 'seslimesaj',
   description: 'Yazdığınız mesajı sesli olarak söyler.',
   usage: 'seslimesaj <mesaj>'
 };