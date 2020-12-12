const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"));
  let prefix = ayarlar.prefix;
  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `Bir Rol Belirt\nÖrnek Kullanım ${prefix}rolrenk @rol rolkodu\nRol Kodunun Başına # Koymayın`
        )
        .setColor("black")
    );
  let renk = args.slice(1).join(" ");
  if (!renk)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `Bir Renk Kodu Belirtmelisin\n Örnek Kullanım: ${prefix}rolrenk @rol renkkodu\n Renk Kodunun başına # Koymayın`
        )
        .setColor("black")
    );
  message.guild.roles.get(rol.id).setColor(renk);
  message.channel.sendEmbed(
    new Discord.RichEmbed()
      .setDescription(`Başarıyla Rol Rengi #${renk} Olarak Ayarlandı!`)
      .setColor(renk)
  );
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rr"],
  permLevel: 3,
  kategori: "bot"
};
exports.help = {
  name: "rolrenk",
  description: "Rolun Rengini Değiştirir",
  usage: "rolrengi @rol renkkodu"
};