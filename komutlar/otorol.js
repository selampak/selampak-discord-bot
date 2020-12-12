const fs = require ('fs')
const Discord = require('discord.js')
var sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
  const ayarlar = require('../ayarlar.json');
  const prefix = ayarlar.prefix

exports.run = async (bot, message, args) =>
{
      let profil = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
  var mentionedChannel = message.mentions.channels.first();
  if (!mentionedChannel && args[0] !== "sıfırla") return message.channel.send(`Ayarlamam İçin Bir Rol Etiketlemelisin. \n Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n Örnek Kullanım : ${prefix}otorol @rol #kanal \n **Oto Yazı Kapatmak İstiyorsan ${prefix}kapat otoyazı`);
  if (message.guild.member(message.author.id).hasPermission(0x8))
    
    {
      var mentionedRole = message.mentions.roles.first();
    if (!mentionedRole) return message.channel.send(`Doğru Kullanım = ${prefix}otorol @<roladı> #<metinkanalı>`).then(msg => msg.delete(5000));
      

    if(!profil[message.guild.id]){
    
        profil[message.guild.id] = {
      
            sayi: mentionedRole.id,
      kanal: mentionedChannel.id
        };
    }
    
    profil[message.guild.id].sayi = mentionedRole.id
  profil[message.guild.id].kanal = mentionedChannel.id
    
    fs.writeFile("jsonlar/otorol.json", JSON.stringify(profil), (err) => {
        console.log(err)

    })

    const embed = new Discord.RichEmbed()
        .setDescription(`Otorol başarıyla ${args[0]} olarak ayarlandı! \n Otorol Mesaj kanalı başarıyla ${mentionedChannel} olarak ayarlandı.\n \n Oto Mesaj'ı kapatabilmek için **${prefix}otomesajkapat** yazabilirsiniz!`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}

}

exports.conf =
{
  enabled: true,
  guildOnly: true,
  aliases: ["otorol", "otoroldeğiştir"],
  permLevel: 3,
}

exports.help =
{
  name: 'otorol',
  description: 'Sunucuya Girenlere Verilecek Olan Otorolü Ayarlar.',
  usage: 'otorolayarla'
}