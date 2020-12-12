const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
 let botid = "546323875068379137"
    const embed = new Discord.RichEmbed()
        .setColor("fa1a1a")
        .setThumbnail(message.author.avatarURL) 
        .addField(`**\`\`\`Prefixim : *\`\`\`**`,`\`\`\`Selampak Bot Total `+  + client.commands.size  + ` Serving with Command.\`\`\``)
        .addField(`**<a:elmas1:679038564994121744>__SELAMPAK COMMANDS__<a:elmas1:679038564994121744>**`,`▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬\n◼  ** *kullanıcı** - User Commands. \n◼  ** *admin** - Authorized Commands \n◼  ** *müzik-yardım** - Music Commands \n◼  ** *bot** - About Bot\n◼  ** *gold-üye** - Gold member prices \n◼  ** *yenilikler** - Bot What's New\n ▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬`)
        .addField(`<a:ylzdzz:692011610222493787>Linkler<a:ylzdzz:692011610222493787>`,` [➾ Bot invite link](https://discordapp.com/oauth2/authorize?client_id=546323875068379137&scope=bot&permissions=2146958847)\n[➾ Support Server](https://discord.gg/k4JpZqr)\n [➾ Bot Site](http://bot.selampak.tk/)`)
        .setTitle(`<a:ejder:692005970662129736> ${message.author.tag} - Requested by. <a:ejder:692005970662129736>`, message.author.avatarURL)
        .setFooter(`${client.user.username} - All Rights Reserved.`, client.user.avatarURL)
    message.channel.send(embed); 
//[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["komutlar"],
  permLevel: 0
};

exports.help = {
  name: "help"
};