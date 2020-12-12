const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
 let botid = "691764976385523804"
    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setThumbnail(message.author.avatarURL) 
        .addField(`**\`\`\`Prefixim : *\`\`\`**`,`\`\`\`Selampak Bot Toplam `+  + client.commands.size  + ` Komutla Hizmet Vermekte.\`\`\``)
       .addField(`**<a:elmas1:679038564994121744>__SELAMPAK GOLD ÜYE__<a:elmas1:679038564994121744>**`,`▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬\n◼  **1 - AY** - 3 TL . \n◼  ** 2 - AY** - 5 TL . \n◼  ** 6 - AY** - 25 TL . \n◼  ** 1 - Yıl** - 50 TL . \n◼  **[Destek Sunucusu](https://discord.gg/k4JpZqr)** - Almak için Gelebilirsiniz \n ▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬`)
    .addField(`<a:ylzdzz:692011610222493787>Linkler<a:ylzdzz:692011610222493787>`,` [➾ Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=546323875068379137&scope=bot&permissions=2146958847)\n[➾ Destek Sunucusu](https://discord.gg/k4JpZqr)\n [➾Bot Sitesi ](https://selampaklist.glitch.me)`)
    .setTitle(`<a:ejder:692005970662129736> ${message.author.tag} - Tarafından istendi. <a:ejder:692005970662129736>`, message.author.avatarURL)
      .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
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
  name: "gold-üye"
};