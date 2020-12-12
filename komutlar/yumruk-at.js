const Discord = require('discord.js');


exports.run = function(client, message) {

 const chypercodeetiketlenenkisi = message.mentions.users.first(); 
  
 if (!chypercodeetiketlenenkisi) return message.channel.send("**Lütfen Yumruk Atmak İçin Birini Etiketleyin**")
  
   const chypercodeembed = new Discord.RichEmbed()
   
    .setDescription( `${chypercodeetiketlenenkisi}` +`**${message.author.username}  Sana Yumruk Attı**`)
    .setImage('https://media1.tenor.com/images/c7dece5cdd4cee237e232e0c5d955042/tenor.gif?itemid=4902914')

    message.channel.send(chypercodeembed);

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['yumrukat'],
  permLevel: 0 
};

exports.help = {
  name: 'yumruk-at', 
  description: 'Yumruk Atarsınız işte ',
  usage: 'c!yumruk-at'
};