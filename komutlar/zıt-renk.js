var Jimp = require('jimp');

exports.run = (client, message, params) => {
  
  let user = message.mentions.users.first() || message.author
  
      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.invert().write('./img/zıt-renk.png');
          setTimeout(() => {
            message.channel.send({file: './img/zıt-renk.png'});
          }, 500);
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invert"],
  permLevel: 0,
  kategori: "efekt"
};

exports.help = {
  name: 'zıt-renk',
  description: 'Avatarınızın rengini tersine çevirir.',
  usage: 'zıt-renk veya zıt-renk <@kullanıcı>'
};