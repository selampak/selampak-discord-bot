const Discord = require("discord.js");
const Canvas = require('canvas')
exports.run = async (client, message, args) => {

    let user = message.mentions.users.first() || message.author

    const canvas = Canvas.createCanvas(600, 300);
    const ctx = canvas.getContext('2d');
  
    const tick = await Canvas.loadImage("https://cdn.discordapp.com/attachments/605047561577037844/676044687965945876/tick.png")
    const notick = await Canvas.loadImage("https://cdn.discordapp.com/attachments/605047561577037844/676044673944649738/notick.png")
    const background = await Canvas.loadImage("https://cdn.discordapp.com/attachments/605047561577037844/676046521900466176/bg.jpg")
    const kullanıcıpp = await Canvas.loadImage(`${user.displayAvatarURL}`)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    const kurulus = new Date().getTime() - user.createdAt.getTime();
    let foto;
    let text;
    if (kurulus > 1300000000) {
        foto = tick
        text = "Bu kullanıcı güvenli."
    }
  
      if (kurulus < 1300000000) {
        foto = notick
        text = "Bu kullanıcı şüpheli."
    }

    ctx.fillStyle = `#161616`;
    ctx.font = `bold 30px Warsaw Gothic`;
    ctx.fillText(`${user.tag.length >= 12 ? user.tag.substring(0 , 12) + ".." : user.tag}`, 200 , 115)
    ctx.fillText(`${text}`,80 , 250)


    ctx.drawImage(foto , 450 , 40 , 100 , 100)

    ctx.beginPath();
    ctx.arc(100, 100, 70, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.clip();
    ctx.drawImage(kullanıcıpp, 25, 25, 150, 150)

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'guvenlik.png');
    message.channel.send(`${user}`)

    message.channel.send(attachment)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 2,
}

exports.help = {
    name: 'güvenlik-sorgu',
    description: '',
    usage: '',
} 