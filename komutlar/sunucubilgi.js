const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (bot, message, params) => {
   const embed = new Discord.RichEmbed()
   .setColor("# 00f5ff")
   .setAuthor(message.guild.name, message.guild.userURL)
   .setThumbnail(message.guild.iconURL)
   .addField('İsim kısaltması:', message.guild.nameAcronym, true)
   .addField('Kimliği:', message.guild.id, true)
   .addField('Bölgesi:', message.guild.region, true)
   .addField('Sahibi:', message.guild.owner, true)
   .addField('Doğrulama seviyesi:', message.guild.verificationLevel, true)
   .addField('Üyeler:', `${message.guild.members.filter( member => member.user.bot).size} bot | ${message.guild.memberCount} üye`, true)
   .addField('Kanallar:', `${message.guild.channels.filter(chan => chan.type === 'voice').size} sesli / ${message.guild.channels.filter(chan => chan.type === 'text').size} metin`, true)
   .addField('Kanal sayısı:', message.guild.channels.size, true)
   .addField('AFK kanalı:', message.guild.afkChannel, true)
   .addField('AFK zaman aşımı:', message.guild.afkTimeout, true)
   .addField('Oluşturma tarihi:', message.guild.createdAt, true)
   .setFooter(`© SelamPak Bot`, message.guild.iconURL)
   .setTimestamp()
   message.channel.send({embed});
   message.react('✅')
 };

 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permLevel: 2
 };

 exports.help = {
   name: 'sunucubilgi',
   description: 'Sunucu bilgisini söyler.',
   usage: 'sunucubilgi'
 };
