const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
 let botid = "691764976385523804"
    const embed = new Discord.RichEmbed()
        .setColor("fa1a1a")
        .setThumbnail(message.author.avatarURL) 
        .addField(`**\`\`\`Prefixim : *\`\`\`**`,`\`\`\`Selampak Bot Toplam `+  + client.commands.size + ` Komutla Hizmet Vermekte.\`\`\``)
        .addField(`**<a:elmas1:679038564994121744>__SELAMPAK ADMİN KOMUTLAR__<a:elmas1:679038564994121744>**`,`▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬\n \`\`herkese-rol-ver\`\` , \`\`herkesten-rol-al\`\` , \`\`sunucu-kur\`\` , \`\`rol-kur\`\` , \`\`slowmode\`\` , \`\`temizle\`\` , \`\`reklam-taraması\`\` , \`\`oylama\`\` , \`\`güvenlik\`\` , \`\`güvenlik-2\`\` , \`\`reklamban\`\` , \`\`reklambankapat\`\` , \`\`sayaç-ayarla\`\` , \`\`sayaç-sıfırla\`\` , \`\`ban\`\` , \`\`kick\`\` , \`\`sunucupanel\`\` , \`\`rolrenk\`\` , \`\`sunucu-kur-2\`\` , \`\`özel-oda-sistemi\`\` , \`\`modlogayarla\`\` , \`\`modlog-sıfırla\`\` , \`\`reklamban\`\` , \`\`reklambankapat\`\` , \`\`otorol\`\` , \`\`otorolkapat\`\` , \`\`gkanal\`\` , \`\`gkanal-sıfırla\`\` , \`\`sohbet-aç\`\` , \`\`sohbet-kapat\`\` , \`\`yumruk-at\`\` , \`\`ddos-sistemi\`\` , \`\`bot-koruma\`\` , \`\`sa-as\`\` , \`\`sunucu-kopyala\`\` , \`\`yedek-yapıştır\`\` , \`\`reklam-engel\`\` , \`\`self-koruma\`\` , \`\`güvenlik-sorgu\`\` , \`\`yazılı-hoşgeldin\`\` , \`\`ses-kanal-aç\`\` , \`\`rol-liste\`\`  \n ▬▬▬▬▬▬▬▬▬▬▬▬๑۩۞۩๑▬▬▬▬▬▬▬▬▬▬▬▬`)    
        .addField(`<a:ylzdzz:692011610222493787>Linkler<a:ylzdzz:692011610222493787>`,` [➾ Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=546323875068379137&scope=bot&permissions=2146958847)\n[➾ Destek Sunucusu](https://discord.gg/k4JpZqr)\n [➾Bot Sitesi ](http://bot.selampak.tk/)`)
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
  name: "admin"
};