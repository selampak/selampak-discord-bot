const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {
  let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username +  ' Off, Çok sevimli dayanamıyorum!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('SelamPak')
    .setImage(`https://cdn.discordapp.com/attachments/539185220264656930/541385924978802718/256breg.jpg`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};


    }
      
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sevimlibak'],
  permLevel: 0
};

exports.help = {
  name: 'sevimlibakış', 
  description: "",
  usage: ''
};