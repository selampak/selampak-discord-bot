const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let sonuc = ["``1CM``\nƐ=>","``2CM``\nƐ==>","``3CM``\nƐ===>","``4CM``\nƐ====>","``5CM``\nƐ=====>","6CM\nƐ======>","``7CM``\nƐ=======>","``8CM``\nƐ========>","``9CM``\n=========)","``10CM``\nƐ==========>","``11CM``\nƐ===========>","``12CM``\nƐ============>\nKalkıyor kalkıyor<a:oy:505793425543528480>...","``13CM``\nƐ=============>", "``14CM``\nƐ==============>", "``15CM``\nƐ=============>\nÇıkarda gölgesinde rakı içek aq<a:oy:505793425543528480>", "``16CM``\nƐ=============>\nUçak?", "``17CM``\nƐ=============>\nSağlam linkmiş.", "``18CM``\nƐ=============>\nSayın yolcularımız 31 NOLU uçağımız havalimanından kalkmaktadır.", "``19CM``\nƐ=============>\nKırk yıllık kampçıyım böyle çadır görmedim a*k", "``20CM``\nƐ=============>\nKuşa fazla yem verdin galiba?", "`21CM`\nƐ=============>\nMalzeme kaç torba çimento attın aq?"];

    let result = Math.floor((Math.random() * sonuc.length));

    let kacembed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .setColor('# 00f5ff')
    .setFooter(`${bot.user.username} `, bot.user.avatarURL)
    .addField("Malafat, diyecek laf yok...", sonuc[result]);
    

    message.channel.send(kacembed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kaçcm', 'kaccm'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'kaccm',
    description: 'kaccm',
    usage: 'kaccm'
  };