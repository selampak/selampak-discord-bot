const Discord = require('discord.js')
const instagram = require("user-instagram")
 
exports.run = (client, message, args) => {
    let kullanici = args.join(' ');
    if(!kullanici) return message.reply(`Bir kullanıcı adı girmedin`)

instagram('https://www.instagram.com/' + kullanici)
.then(data => {

  const biocuk = (data.bio.length === 0 ? 'Yok' : data.bio)  
  const isimcik = (data.fullName.length === 0 ? 'Yok' : data.fullName)

  var gizlimi;
  var onaylimi;

  if (data.isPrivate === false) gizlimi = "Hayır"
  if (data.isPrivate === true) gizlimi = "Evet"
  if (data.isVerified === false) onaylimi = "Hayır"
  if (data.isVerified === true) onaylimi = "Evet"

    const embed = new Discord.RichEmbed()
    .setColor('AEED13')
    .setDescription( 'Belirttiğiniz Kişinin **Instagram** Profil Fotoğrafı:')
    .setImage(`${data.avatarHD}`)
    .setTimestamp()
    .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  message.channel.send(embed)
}) 
}

exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: [],
    permLevel: 0 
  };
exports.help = {
    name: 'instagram',
    description: 'Belirttiğiniz kişi/kullanıcıyla aşk derecesini gönderir.',
    usage: 'aşkölçer [@Kullanıcı]'
}