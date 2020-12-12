const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = (message.guild.emojis.find("name", `${emojiname}`))
    if (!emojiname) return message.channel.send("Emoji İsmini Yazmalısın.")
    message.channel.send(`\`\`<a:${emojiname}:${emoji.id}>\`\`\n Emoji : <a:${emojiname}:${emoji.id}>`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kod'],
    permLevel: 0
}

exports.help = {
    name: 'kod',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}