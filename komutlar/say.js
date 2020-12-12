const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0
     let botlar = message.guild.members.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setThumbnail(`https://cdn.discordapp.com/emojis/679038564994121744.gif?v=1`)
        .addField(`<a:Nraxy4:700709791441354783>**__Sunucudaki Toplam Üye Sayısı__**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
        .addField(`<a:ine:700709773259178054> **__Toplam Çevrimiçi Üye Sayısı__**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
        .addField(`<a:Elmas:700709732435886151> **__Seslideki Üye Sayısı__**`,`**\`\`\`${count}\`\`\`**`)
        .addField(`<a:Yukleniyorr:700709689033228399> **__Yazı Kanalları__**`, `» **${textChannels}**`)
        .addField(`<a:2203:689563673563234326> **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
        .addField(`<a:2203:689563673563234326> **__Roller__**`,`»  **${message.guild.roles.size}**`)
        .addField(`<a:2203:689563673563234326> **__Emojiler__**`,`»  **${message.guild.emojis.size}**`)
        .addField(`<a:2203:689563673563234326>  **__Kullanıcılar__**`, ` <a:acikk:690261552418390135> Çevrimiçi : **${message.guild.members.filter(o => o.presence.status === 'online').size}** \n <a:kapalii:690261552334766256> Rahatsız Etmeyin : **${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** \n <a:bosa:690261553098129516> Boşta: **${message.guild.members.filter(i => i.presence.status === 'idle').size}** \n <a:kapaliii:690261551931850802> Görünmez/Çevrimdışı : **${message.guild.members.filter(off => off.presence.status === 'offline').size}** \n <:2207:690247881827024972> Botlar : **${botlar}**`, true)
        .setTitle(`<a:tac:700709749552840764> ${message.author.tag} - Tarafından istendi. <a:tac:700709749552840764>`)
        .setFooter(`SelamPak Tüm Hakları Saklıdır.`, client.user.avatarURL)
    message.channel.send(embed);

} 

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 2
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}