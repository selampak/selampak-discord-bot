const Discord = require('discord.js')
exports.run = (client, message, args) => {
	try {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda, bulunmakta olan roller;`, message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' , '))
        .setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
			.setColor("fa1a1a")
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.RichEmbed()
			.addField(`Sunucuda, bulunmakta olan roller;`, 'Çok fazla rol bulunmakta veya rol bulunmamakta!')
			.setColor("fa1a1a")
			.setTimestamp()
		message.channel.send({embed})
	}
}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 2,
	kategori: 'kullanıcı'
}
exports.help = {
	name: 'rol-liste',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'roller'
}
