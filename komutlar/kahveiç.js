const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
// 

exports.run = (client, message, params) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(ozelmesajuyari);
  }
  if (message.channel.type !== "dm") {
    const ıhlamur = new Discord.RichEmbed()
      .setTitle(`${message.author.username}  Türk Kahvesini İçti`) 
      .setColor("RANDOM")
      .setTimestamp()
      .setDescription("SelamPak")
      .setURL("")
      .setImage(
        `http://img03.blogcu.com/v2/images/orj/k/u/l/kulkedim/kulkedim_132520233787.gif`
      );
    return message.channel.sendEmbed(ıhlamur);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kahve-iç", "kahveiç"],
  permLevel: 0
};

exports.help = {
  name: "kahve",
  description: "Kahve İçersiniz Ama Türk Kahvesii",
  usage: "kahve"
}; 