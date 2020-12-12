const Discord = require('discord.js')
const fs = require('fs')
  const ayarlar = require('../ayarlar.json');
  const prefix = ayarlar.prefix
  
exports.run = async (client, message, args) => {
      let sunucuyaözelayarlarOtorol = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
        let otorolkapat = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
        if(!sunucuyaözelayarlarOtorol[message.guild.id]) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Otorolü Ayarlamadığın İçin Sıfırlayamazsın!`)
                .setColor("RANDOM")
                .setFooter(`Ayarlamak İçin ${prefix}otorol @roladi`)
            message.channel.send({embed})
            return
        }
        delete sunucuyaözelayarlarOtorol[message.guild.id]
        fs.writeFile("./jsonlar/otorol.json", JSON.stringify(sunucuyaözelayarlarOtorol), (err) => {
            console.log(err)
        })
        const embed = new Discord.RichEmbed()
            .setDescription(`Otorol Başarıyla Sıfırlandı`)
            .setColor("RANDOM")
            .setTimestamp()
        message.channel.send({embed})
        return
    }

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: 'otorolkapat', 
  description: 'Otorol Kapatır',
  usage: 'otorolkapat'
};