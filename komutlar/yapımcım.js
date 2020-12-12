const Discord = require('discord.js')

exports.run = (client, message) => {

    const xir = new Discord.RichEmbed()
        .setColor('GREEN')
        .setTitle(":bell: Sahibimin Hakkında Bilgiler")
        .addField("<:discordd:690515631845539851> Discord:", `<@422069765327290390> - ℠Selçuk#8730 `)
        .addField("<a:236:689579831087595604> Website:", `https://selampak-site.glitch.me/`)
    
    message.channel.send(xir)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}
exports.help = {
    name: "yapımcım"
}