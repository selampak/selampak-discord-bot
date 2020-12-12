const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send(":timer: Cevap yükleniyor..");

    let {body} = await superagent 
    .get('https://turkapi.glitch.me/api/kedi');
    if(!{body}) return message.channel.send("Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(body.body)
    .setImage()
    .setTimestamp()
    message.channel.send({embed})

    msg.delete();
};

exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "kedi",
    description: "Bir kedi ismi gönderir.",
    usage: "kedi"
};