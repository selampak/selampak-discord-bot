const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor("Taksim Dayı")
 .setImage("https://youtubeizleindir.org/resimler/resim_c2NvdUOtpHUyd1Q.jpeg")
    .setFooter("SelamPak");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["dayı", "taksim"],
  permLevel: 0
};
exports.help = {
  name: "taksimdayı",
  description: "taksim dayı resmi atar",
  usage: "taksimdayı"
};